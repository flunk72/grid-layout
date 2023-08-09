import { useContext } from 'react';
import { GridItemProps } from './GridItem.props';
import { GridStyledItem } from './GridItem.styled';
import { GridItemContext } from '../GridContext/GridContext';

const GridItem = ({ size, children }: GridItemProps) => {
  const { addItem } = useContext<any>(GridItemContext);
  addItem(size);
  return <GridStyledItem size={size}>{children}</GridStyledItem>;
};

export default GridItem;
