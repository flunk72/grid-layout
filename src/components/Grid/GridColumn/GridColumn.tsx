import React from 'react';
import { GridColumnProps } from './GridColumn.props';
import { GridStyledColumn } from './GridColumn.styled';

const GridColumn = ({ children }: GridColumnProps): JSX.Element => {
  const childrenArray = Array.isArray(children) ? children : [children];

  const sizeGridColumnItems = childrenArray.map((i) => i?.props.size);

  return <GridStyledColumn size={sizeGridColumnItems}>{children}</GridStyledColumn>;
};

export default GridColumn;
