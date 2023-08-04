import React from 'react';
import { GridWrapper, GridRow, GridColumn, GridItem } from './Grid.styled';

const Grid = () => {
  // это parent
  return (
    <GridWrapper>
      <GridRow>
        <GridItem size={200}>
          <GridColumn size={200}>
            <GridItem size={80}></GridItem>
            <GridItem size={50}></GridItem>
            <GridItem size={50}></GridItem>
          </GridColumn>
        </GridItem>
        <GridItem size={100}>
          <GridColumn size={100}>
            <GridItem size={50}></GridItem>
            <GridItem size={50}></GridItem>
          </GridColumn>
        </GridItem>
      </GridRow>
      <GridRow></GridRow>
    </GridWrapper>
  );
};

export default Grid;
