 import React, { createContext, useContext, useState, ReactNode } from 'react';
 
 export interface Product {
   id: string;
   name: { en: string; ar: string };
   price: number;
   image: string;
   description: { en: string; ar: string };
   category: string;
 }
 
 export interface CartItem extends Product {
   quantity: number;
 }
 
 interface CartContextType {
   items: CartItem[];
   addItem: (product: Product) => void;
   removeItem: (productId: string) => void;
   updateQuantity: (productId: string, quantity: number) => void;
   clearCart: () => void;
   total: number;
 }
 
 const CartContext = createContext<CartContextType | undefined>(undefined);
 
 export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
   const [items, setItems] = useState<CartItem[]>([]);
 
   const addItem = (product: Product) => {
     setItems((prev) => {
       const existing = prev.find((item) => item.id === product.id);
       if (existing) {
         return prev.map((item) =>
           item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
         );
       }
       return [...prev, { ...product, quantity: 1 }];
     });
   };
 
   const removeItem = (productId: string) => {
     setItems((prev) => prev.filter((item) => item.id !== productId));
   };
 
   const updateQuantity = (productId: string, quantity: number) => {
     if (quantity <= 0) {
       removeItem(productId);
       return;
     }
     setItems((prev) =>
       prev.map((item) => (item.id === productId ? { ...item, quantity } : item))
     );
   };
 
   const clearCart = () => {
     setItems([]);
   };
 
   const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
 
   return (
     <CartContext.Provider
       value={{ items, addItem, removeItem, updateQuantity, clearCart, total }}
     >
       {children}
     </CartContext.Provider>
   );
 };
 
 export const useCart = () => {
   const context = useContext(CartContext);
   if (!context) {
     throw new Error('useCart must be used within a CartProvider');
   }
   return context;
 };