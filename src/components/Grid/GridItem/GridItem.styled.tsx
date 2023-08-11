import styled from 'styled-components';

export const GridStyledItem = styled.div<{ size?: number | string; color?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;
  overflow-x: hidden;
  background-color: ${(props) => props.color};
`;
