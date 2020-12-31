import React from 'react';
import Wrap from './styled';
import Header from './components/header';
import Main from './components/main';

const App: React.FC = () => {
  return (
    <Wrap>
      <Header />
      <Main />
    </Wrap>
  );
};

export default App;
