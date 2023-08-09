import styled from 'styled-components';

export const GridStyledItem = styled.div<{ size?: number | string }>`
  display: grid;
  overflow-y: hidden;
  overflow-x: hidden;
  background-color: green;
  padding: 5px;
`;
