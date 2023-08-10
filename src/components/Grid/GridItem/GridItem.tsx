import { GridItemProps } from './GridItem.props';
import { GridStyledItem } from './GridItem.styled';

const GridItem = ({ size, children }: GridItemProps): JSX.Element => {
  return <GridStyledItem size={size}>{children}</GridStyledItem>;
};

export default GridItem;
