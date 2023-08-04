import React from 'react';
import styled from 'styled-components';

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
  gap: 10px;
`;

export const GridRow = styled.div<{ size?: number | string }>`
  background-color: red;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  padding: 5px;
  gap: 5px;
`;

export const GridColumn = styled.div<{ size?: any }>`
  display: grid;
  grid-template-rows: repeat(
    auto-fit,
    ${(props) => (props.size ? props.size.map((i: number) => `${i}px `) : '1fr')}
  );
  gap: 5px;
  background-color: aqua;
  padding: 5px;
`;

export const GridItem = styled.div<{ size?: number | string }>`
  display: grid;
  grid-auto-rows: repeat(5, 50px);
  background-color: green;
  padding: 5px;
`;

/* display: grid;
  grid-template-columns: ${(props) =>
    `repeat(auto-fit, ${props.size ? `${props.size}px` : '1fr'})`}; */

// grid-template-columns: ${({ children }) => {
//   const numChildren = React.Children.count(children);
//   return `repeat(${numChildren}, 1fr)`; // Equal width columns
// }};
