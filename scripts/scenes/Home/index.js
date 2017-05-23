import React from 'react';
import { Page } from 'react-onsenui';
import Toolbar from '../../components/Toolbar';

const renderToolbar = () => {
  return <Toolbar title="Home" />;
};

const Home = () => (
  <Page modifier="main" renderToolbar={renderToolbar}>
      Home
  </Page>
);

export default Home;
