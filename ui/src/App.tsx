import React from 'react';
import './App.css';
import { RecoilRoot } from 'recoil';
import { Main, TopBar } from './components';
import { createTheme, ThemeProvider } from '@mui/material';


function App() {
  const theme = createTheme({
    palette: {
      mode: 'dark'
    }
  });

  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <TopBar />
        <Main />
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
