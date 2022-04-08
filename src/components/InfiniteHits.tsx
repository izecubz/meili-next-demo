import { connectInfiniteHits } from 'react-instantsearch-dom';
import { Grid } from '@mantine/core';
import CustomSearch from './CustomSearch';

const InfiniteHits = ({
                        hits,
                        hasPrevious,
                        refinePrevious,
                        hasMore,
                        refineNext
                      }: {
  hits: any[];
  hasPrevious: boolean;
  refinePrevious: () => void;
  hasMore: boolean;
  refineNext: () => void;
}) => {
  console.log(hits);
  return (
    <>
      <CustomSearch />
      <Grid>
        {hits.map((hit: any, index: number) => (
          <Grid.Col key={index} xs={3}>
            <h1>{hit.name}</h1>
          </Grid.Col>
        ))}
      </Grid>
    </>
  );
};

export default connectInfiniteHits(InfiniteHits);
