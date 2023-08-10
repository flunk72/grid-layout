import { GridWrapper } from './Grid.styled';
import GridColumn from '../components/Grid/GridColumn/GridColumn';
import GridItem from '../components/Grid/GridItem/GridItem';
import GridRow from '../components/Grid/GridRow/GridRow';

const Grid = () => {
  return (
    <GridWrapper>
      <GridRow>
        <GridItem size={500}>
          <GridColumn>
            <GridItem size={500}></GridItem>
            <GridItem size={'1*'}></GridItem>
          </GridColumn>
        </GridItem>
        <GridItem size={'2*'}>
          <GridColumn>
            <GridItem size={500}></GridItem>
            <GridItem size={'1*'}></GridItem>
            <GridItem size={'4*'}></GridItem>
          </GridColumn>
        </GridItem>
        <GridItem size={'1*'}>
          <GridColumn>
            <GridItem size={500}></GridItem>
            <GridItem size={'2*'}></GridItem>
            <GridItem size={'1*'}></GridItem>
          </GridColumn>
        </GridItem>
      </GridRow>
      <GridRow>
        <GridItem size={500}>
          <GridColumn>
            <GridItem size={200}></GridItem>
            <GridItem size={100}></GridItem>
          </GridColumn>
        </GridItem>
        <GridItem size={'1*'}>
          <GridColumn>
            <GridItem size={'1*'}></GridItem>
            <GridItem size={'4*'}></GridItem>
          </GridColumn>
        </GridItem>
      </GridRow>
    </GridWrapper>
  );
};

export default Grid;
