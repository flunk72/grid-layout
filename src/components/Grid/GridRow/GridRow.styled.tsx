import styled from 'styled-components';

export const GridStyledRow = styled.div<{ size?: (number | string)[] }>`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: ${(props) =>
    props.size?.map((i: number | string) =>
      typeof i === 'string' ? `${i.replace('*', 'fr')} ` : `${i}px `,
    )};
`;
