import styled from 'styled-components';

export const GridWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const GridRow = styled.div<{ size?: any }>`
  background-color: red;
  display: grid;
  grid-template-columns: ${(props) =>
    props.size?.map((i: number) => (isNaN(i) ? `1fr ` : `${i}px `))};
  padding: 5px;
  gap: 5px;
`;

export const GridColumn = styled.div<{ size?: any }>`
  display: grid;
  grid-template-rows: ${(props) =>
    props.size?.map((i: number | string) =>
      typeof i === 'string' ? `${i.replace('*', 'fr')} ` : `${i}px `,
    )};
  gap: 5px;
  background-color: aqua;
  padding: 5px;
`;

export const GridItem = styled.div<{ size?: number | string }>`
  display: grid;
  overflow-y: hidden;
  overflow-x: hidden;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
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
