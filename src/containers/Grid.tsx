import { GridWrapper } from './Grid.styled';
import GridColumn from '../components/Grid/GridColumn/GridColumn';
import GridItem from '../components/Grid/GridItem/GridItem';
import GridRow from '../components/Grid/GridRow/GridRow';
import { GridItemContext, GridItemProvider } from '../components/Grid/GridContext/GridContext';
import { useContext } from 'react';

const Grid = () => {
  const { items } = useContext<any>(GridItemContext);

  const gridItemArray = items?.map((item: any) => ({ [item.key]: item.value }));
  console.log(gridItemArray);
  return (
    <GridItemProvider>
      <GridWrapper>
        <GridRow>
          <GridItem size={500}>
            <GridColumn>
              <GridItem size={500}></GridItem>
              <GridItem size={'3*'}></GridItem>
            </GridColumn>
          </GridItem>
          <GridItem size={500}>
            <GridColumn>
              <GridItem size={500}></GridItem>
              <GridItem size={'3*'}></GridItem>
              <GridItem size={'1*'}></GridItem>
            </GridColumn>
          </GridItem>
        </GridRow>
      </GridWrapper>
    </GridItemProvider>
  );
};

export default Grid;
