import React from 'react';
import './App.css';
import { RecoilRoot } from 'recoil';
import { createTheme, ThemeProvider } from '@mui/material';
import { Main, TopBar } from './components';


function App() {
  const theme = createTheme({
    palette: {
      mode: 'dark',
    },
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
