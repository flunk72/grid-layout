import React from 'react';
import { GridWrapper, GridRow, GridColumn, GridItem } from './Grid.styled';

const Grid = () => {
  // это parent
  return (
    <GridWrapper>
      <GridRow size={['*', 350]}>
        <GridItem>
          <GridColumn size={[170, '3*', '1*', 300]}>
            <GridItem>
              11111111Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores labore
              reiciendisLorem ipsum dolor sit amet consectetur adipisicing elit. Maiores labore
              reiciendisLorem ipsum dolor sit amet consectetur adipisicing elit. Maiores labore
            </GridItem>
            <GridItem>
              11111111Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores labore
              reiciendisLorem ipsum dolor sit amet consectetur adipisicing elit. Maiores labore
              reiciendisLorem ipsum dolor sit amet consectetur adipisicing elit. Maiores labore
              11111111Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores labore
              reiciendisLorem ipsum dolor sit amet consectetur adipisicing elit. Maiores labore
              reiciendisLorem ipsum dolor sit amet consectetur adipisicing elit. Maiores labore
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores labore reiciendis
            </GridItem>
            <GridItem>egerg</GridItem>
            <GridItem>egerg</GridItem>
          </GridColumn>
        </GridItem>
        <GridItem>
          <GridColumn>
            <GridItem></GridItem>
            <GridItem></GridItem>
          </GridColumn>
        </GridItem>
      </GridRow>
    </GridWrapper>
  );
};

export default Grid;
