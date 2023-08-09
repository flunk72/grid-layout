import styled from 'styled-components';

export const GridStyledColumn = styled.div<{ size?: any }>`
  display: grid;
  grid-template-rows: ${(props) =>
    props.size?.map((i: number | string) =>
      typeof i === 'string' ? `${i.replace('*', 'fr')} ` : `${i}px `,
    )};
  gap: 5px;
  background-color: aqua;
  padding: 5px;
`;
