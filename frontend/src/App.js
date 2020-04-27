import React from 'react';

import GlobalStyle from './styles/global';
import { Container, Content } from './styles';

import Upload from './components/Upload';

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Content>
        <Upload />
      </Content>
    </Container>
    
    
  );
}

export default App;
