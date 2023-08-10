import { GridRowProps } from './GridRow.props';
import { GridStyledRow } from './GridRow.styled';

const GridRow = ({ children }: GridRowProps): JSX.Element => {
  const childrenArray = Array.isArray(children) ? children : [children];

  const sizeGridRowItems = childrenArray.map((i) => i?.props.size);

  return <GridStyledRow size={sizeGridRowItems}>{children}</GridStyledRow>;
};

export default GridRow;
