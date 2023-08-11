import { GridWrapper } from './Grid.styled';
import GridColumn from '../components/Grid/GridColumn/GridColumn';
import GridItem from '../components/Grid/GridItem/GridItem';
import GridRow from '../components/Grid/GridRow/GridRow';

const Grid = () => {
  return (
    <GridWrapper>
      <GridRow>
        <GridItem size={200} color="#d32f2f">
          <GridColumn>
            <GridItem size={300} color="#f48fb1">
              <>1</>
            </GridItem>
            <GridItem size={'2*'} color="#ec407a">
              <>2</>
            </GridItem>
            <GridItem size={'1*'} color="#ad1457">
              <>3</>
            </GridItem>
          </GridColumn>
        </GridItem>
        <GridItem size={'2*'} color="#6a1b9a">
          <GridColumn>
            <GridItem size={200} color="##9575cd">
              <>4</>
            </GridItem>
            <GridItem size={'2*'} color="#5e35b1">
              <>5</>
            </GridItem>
            <GridItem size={'1*'} color="#311b92">
              <>6</>
            </GridItem>
          </GridColumn>
        </GridItem>
        <GridItem size={'1*'} color="#283593">
          <GridColumn>
            <GridItem size={100} color="#64b5f6">
              <>7</>
            </GridItem>
            <GridItem size={'1*'} color="#1e88e5">
              <>8</>
            </GridItem>
            <GridItem size={'4*'} color="#0d47a1">
              <>9</>
            </GridItem>
          </GridColumn>
        </GridItem>
      </GridRow>
      <GridRow>
        <GridItem size={'2*'} color="#0277bd">
          <GridColumn>
            <GridItem size={200} color="#4dd0e1">
              <>10</>
            </GridItem>
            <GridItem size={'1*'} color="#0097a7">
              <>11</>
            </GridItem>
          </GridColumn>
        </GridItem>
        <GridItem size={'1*'} color="#00695c">
          <GridColumn>
            <GridItem size={'1*'} color="#66bb6a">
              <>12</>
            </GridItem>
            <GridItem size={'4*'} color="#00e676">
              <>13</>
            </GridItem>
          </GridColumn>
        </GridItem>
      </GridRow>
    </GridWrapper>
  );
};

export default Grid;
