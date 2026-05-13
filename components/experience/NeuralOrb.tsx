'use client';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh, MeshPhysicalMaterial } from 'three';
import { Float } from '@react-three/drei';

export default function NeuralOrb({ orbState }: { orbState: React.MutableRefObject<{scale: number, x: number, y: number, z: number}> }) {
  const meshRef = useRef<Mesh>(null);
  const materialRef = useRef<MeshPhysicalMaterial>(null);

  useFrame((state) => {
    if (materialRef.current) {
      // Subtle pulsing effect based on time
      materialRef.current.emissiveIntensity = 0.4 + Math.sin(state.clock.elapsedTime * 1.5) * 0.15;
    }
    if (meshRef.current) {
      // Apply GSAP interpolated state from parent
      meshRef.current.scale.setScalar(orbState.current.scale);
      meshRef.current.position.set(orbState.current.x, orbState.current.y, orbState.current.z);

      // Rotate the orb slowly
      meshRef.current.rotation.y += 0.003;
      meshRef.current.rotation.z += 0.002;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={meshRef}>
        {/* Icosahedron gives a slightly techy but sleek geometric look */}
        <icosahedronGeometry args={[2, 4]} />
        <meshPhysicalMaterial
          ref={materialRef}
          color="#ffffff"
          emissive="#7c3aed"
          emissiveIntensity={0.4}
          roughness={0.1}
          metalness={0.2}
          transmission={0.9}
          thickness={1.5}
          ior={1.2}
          clearcoat={1}
          clearcoatRoughness={0.1}
          wireframe={true} // A premium geometric wireframe look, not chaotic
        />
      </mesh>
    </Float>
  );
}
