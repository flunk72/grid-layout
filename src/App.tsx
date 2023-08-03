import { Styles } from './styles.styled';
import { Layout } from './App.styled';
import Grid from './components/Grid/Grid';
import { useState } from 'react';

function App() {
  return (
    <div>
      <Layout>
        <Grid />
        <Styles />
      </Layout>
    </div>
  );
}

export default App;
