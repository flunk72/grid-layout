import React, { useContext } from 'react';
import { GridRowProps } from './GridRow.props';
import { GridStyledRow } from './GridRow.styled';
import { GridItemContext } from '../GridContext/GridContext';

const GridRow = ({ children }: GridRowProps) => {
  const { items } = useContext<any>(GridItemContext);
  console.log('items', items);
  return <GridStyledRow size={items}>{children}</GridStyledRow>;
};

export default GridRow;
