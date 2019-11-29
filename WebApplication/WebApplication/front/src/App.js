import React from 'react';
import FeatureFlagProvider from './FeatureFlagProvider'
import { Container, Grid} from '@material-ui/core';
import Feature1 from './Feature1';
import Feature2 from './Feature2';
import Feature3 from './Feature3';




function App() {
  
  return (
    <FeatureFlagProvider>
      <Container fixed>
        <Grid container spacing={3}>
          <Grid item xs={12}>
              <Feature1 />
          </Grid>
          <Grid item xs={6}>
              <Feature2 />
          </Grid>
          <Grid item xs={6}>
              <Feature3 />
          </Grid>
        </Grid>
      </Container>


    </FeatureFlagProvider>
  );
}

export default App;
