'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import OrderModal from '../components/OrderModal';

interface OrderContextType {
  isOpen: boolean;
  selectedProduct: string | undefined;
  openOrderModal: (productName?: string) => void;
  closeOrderModal: () => void;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string | undefined>(undefined);

  const openOrderModal = (productName?: string) => {
    setSelectedProduct(productName);
    setIsOpen(true);
  };

  const closeOrderModal = () => {
    setIsOpen(false);
    setSelectedProduct(undefined);
  };

  return (
    <OrderContext.Provider value={{ isOpen, selectedProduct, openOrderModal, closeOrderModal }}>
      {children}
      <OrderModal />
    </OrderContext.Provider>
  );
};

export const useOrder = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrder must be used within an OrderProvider');
  }
  return context;
};
