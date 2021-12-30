import React from 'react';
import { ethers } from 'ethers';
import logo from './logo.svg';
import './App.css';
import { getChallenge, getJwt } from './sdk';

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    ethereum: any;
  }
}

async function login() {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  await provider.send('eth_requestAccounts', []);
  const signer = provider.getSigner();
  const address = await signer.getAddress();
  const challange = await getChallenge(address);
  const signedChallenge = await signer.signMessage(challange);
  const jwt = await getJwt(address, signedChallenge);
  alert(`challenge success! your proved ownership of: ${jwt}`);
}

function App() {
  if ('ethereum' in window) {
    login();
  } else {
    alert('please use a web3 compatible browser');
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
