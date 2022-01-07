import React from 'react';
import './App.css';
import { RecoilRoot } from 'recoil';
import { Main, TopBar } from './components';


function App() {
  return (
    <RecoilRoot>
      <TopBar />
      <Main />
    </RecoilRoot>
  );
}

export default App;
