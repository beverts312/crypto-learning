import React from 'react';
import './App.css';
import { RecoilRoot } from 'recoil';
import { Main, TopBar, NftGallery, DomainResolver } from './components';
import { createTheme, ThemeProvider } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const theme = createTheme({});

  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <Router>
          <TopBar />
          <Routes>
            <Route path="/domain" element={<DomainResolver />} />
            <Route path="/gallery" element={<NftGallery />} />
            <Route path="/" element={<Main />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
