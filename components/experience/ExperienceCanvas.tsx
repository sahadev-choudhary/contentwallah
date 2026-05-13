'use client';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import NeuralOrb from './NeuralOrb';

export default function ExperienceCanvas({ orbState }: { orbState: React.MutableRefObject<{scale: number, x: number, y: number, z: number}> }) {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }} dpr={[1, 2]}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 10, 5]} intensity={1.5} color="#ffffff" />
        <directionalLight position={[-5, -10, -5]} intensity={1} color="#7c3aed" />
        <directionalLight position={[0, 0, 5]} intensity={0.5} color="#3b82f6" />
        
        <NeuralOrb orbState={orbState} />
        
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
