import styled from 'styled-components';

export const GridStyledRow = styled.div<{ size?: any }>`
  background-color: red;
  display: grid;
  grid-template-columns: ${(props) =>
    props.size?.map((i: number) => (isNaN(i) ? `1fr ` : `${i}px `))};
  padding: 5px;
  gap: 5px;
`;
