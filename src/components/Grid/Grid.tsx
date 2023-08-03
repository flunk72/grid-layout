import React from 'react';
import { GridWrapper, GridRow, GridColumn, GridItem } from './Grid.styled';

const Grid = () => {
  // это parent
  return (
    <GridWrapper>
      <GridRow>
        <GridItem size={500}>
          <GridColumn>
            <GridItem size={200}></GridItem>
            <GridItem size={50}></GridItem>
            <GridItem size={200}></GridItem>
          </GridColumn>
        </GridItem>
        <GridItem size={300}>
          <GridColumn>
            <GridItem size={200}></GridItem>
          </GridColumn>
        </GridItem>
      </GridRow>
      <GridRow>
        <GridItem size={40}></GridItem>
        <GridItem size={40}></GridItem>
      </GridRow>
    </GridWrapper>
  );
};

export default Grid;
