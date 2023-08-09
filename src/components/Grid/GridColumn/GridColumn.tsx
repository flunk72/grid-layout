import React from 'react';
import { GridColumnProps } from './GridColumn.props';
import { GridStyledColumn } from './GridColumn.styled';

const GridColumn = ({ size, children }: GridColumnProps) => {
  return <GridStyledColumn>{children}</GridStyledColumn>;
};

export default GridColumn;
