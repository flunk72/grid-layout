import styled from 'styled-components';

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(200px, 1fr));
  gap: 10px;
`;

export const GridRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  /* grid-template-rows: repeat(auto-fit, minmax(400px, 1fr)); */
  background-color: red;
`;

export const GridItem = styled.div<{ size?: number | string }>`
  display: grid;
  grid-template-columns: ${(props) =>
    `repeat(auto-fit, ${props.size ? `${props.size}px` : '1fr'})`};

  background-color: green;
`;

export const GridColumn = styled.div`
  display: grid;
  grid-template-rows: repeat(auto-fit, minmax(200px, 1fr));
  background-color: blue;
`;
