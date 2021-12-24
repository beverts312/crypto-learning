import React from 'react';
import logo from './logo.svg';
import './App.css';
import {  ethers } from 'ethers';

declare global {
  interface Window {
    ethereum: any;
  }
}

const address = 'everts.eth';

function App() {
  if ('ethereum' in window) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    // const signer = provider.getSigner()
    provider.getBalance(address).then(balance => alert(`${address} contains ${ethers.utils.formatEther(balance)} ETH`));
  } else {
    alert('no bueno')
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Connect a wallet to get started!
        </p>
      </header>
    </div>
  );
}

export default App;
