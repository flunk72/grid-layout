import React from 'react';
import { GridWrapper, GridRow, GridColumn, GridItem } from './Grid.styled';

const Grid = () => {
  // это parent
  return (
    <GridWrapper>
      <GridRow>
        <GridItem>
          <GridColumn size={[50, 20, 80]}>
            <GridItem></GridItem>
            <GridItem></GridItem>
            <GridItem></GridItem>
          </GridColumn>
        </GridItem>
        <GridItem size={100}>
          <GridColumn>
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
