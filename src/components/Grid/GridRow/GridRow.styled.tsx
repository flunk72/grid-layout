import styled from 'styled-components';

export const GridStyledRow = styled.div<{ size?: any }>`
  background-color: red;
  display: grid;
  grid-template-columns: ${(props) =>
    props.size?.map((i: number | string) =>
      typeof i === 'string' ? `${i.replace('*', 'fr')} ` : `${i}px `,
    )};
  gap: 5px;
`;
