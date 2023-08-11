import { GridItemProps } from './GridItem.props';
import { GridStyledItem } from './GridItem.styled';

const GridItem = ({ size, children, color }: GridItemProps): JSX.Element => {
  return (
    <GridStyledItem size={size} color={color}>
      {children}
    </GridStyledItem>
  );
};

export default GridItem;
