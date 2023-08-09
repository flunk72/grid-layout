import React, { ReactNode, createContext } from 'react';

// Создаем контекст
export const GridItemContext = createContext<any>([]);

// Компонент-провайдер, который будет предоставлять значения контекста
export const GridItemProvider = ({ children }: any): any => {
  const items: any = [];

  // Функция для добавления значений из GridItem в массив
  const addItem: any = (value: any): any => {
    items.push({ value });
  };

  return <GridItemContext.Provider value={{ items, addItem }}>{children}</GridItemContext.Provider>;
};
