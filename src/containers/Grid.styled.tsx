import styled from 'styled-components';

export const GridWrapper = styled.div`
  display: grid;
  gap: 10px;
  height: 100vh;
`;

/* display: grid;
  grid-template-columns: ${(props) =>
    `repeat(auto-fit, ${props.size ? `${props.size}px` : '1fr'})`}; */

// grid-template-columns: ${({ children }) => {
//   const numChildren = React.Children.count(children);
//   return `repeat(${numChildren}, 1fr)`; // Equal width columns
// }};
