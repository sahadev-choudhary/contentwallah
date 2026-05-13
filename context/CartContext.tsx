'use client';
import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { PRODUCTS } from '@/data/products';

export interface CartItem { id: string; qty: number; }

interface CartContextType {
  items: CartItem[];
  add: (id: string) => void;
  remove: (id: string) => void;
  clear: () => void;
  count: number;
  total: number;
}

const CartContext = createContext<CartContextType | null>(null);

function load(): CartItem[] {
  if (typeof window === 'undefined') return [];
  try { return JSON.parse(localStorage.getItem('cw_cart') ?? '[]'); } catch { return []; }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  useEffect(() => { setItems(load()); }, []);

  const save = useCallback((next: CartItem[]) => {
    setItems(next);
    localStorage.setItem('cw_cart', JSON.stringify(next));
  }, []);

  const add = useCallback((id: string) => {
    setItems(prev => {
      if (prev.find(i => i.id === id)) return prev;
      const next = [...prev, { id, qty: 1 }];
      localStorage.setItem('cw_cart', JSON.stringify(next));
      return next;
    });
  }, []);

  const remove = useCallback((id: string) => {
    save(items.filter(i => i.id !== id));
  }, [items, save]);

  const clear = useCallback(() => save([]), [save]);

  const count = items.length;
  const total = items.reduce((s, i) => s + (PRODUCTS[i.id]?.price ?? 0) * i.qty, 0);

  return (
    <CartContext.Provider value={{ items, add, remove, clear, count, total }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextType {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be inside CartProvider');
  return ctx;
}
