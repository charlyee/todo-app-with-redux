import React from 'react';
import { Grid } from 'semantic-ui-react';
import Catalogue from './components/Catalogue';

function App() {
  return (
    <Grid centered>
      <Grid.Row>
        <h1>To-Do List with React &amp; Redux</h1>
      </Grid.Row>
      <Grid.Row>
        {/* Tasks. */}
        <Catalogue />
      </Grid.Row>
      <Grid.Row>
        {/* List */}
      </Grid.Row>
    </Grid>
  );
}

export default App;
