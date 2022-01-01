import React from 'react';
import './App.css';
import { getChallenge, getJwt } from './sdk';
import {  ethers } from 'ethers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


declare global {
  interface Window {
    ethereum: any;
  }
}


async function login() {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  await provider.send("eth_requestAccounts", []);
  const signer = provider.getSigner();
  const address = await signer.getAddress();
  const challange = await getChallenge(address);
  const signedChallenge = await signer.signMessage(challange);
  const jwt = await getJwt(address, signedChallenge);
  alert(`challenge success! your proved ownership of: ${jwt}`);
}

function App() {
  if ('ethereum' in window) {
    login()
  } else {
    alert('please use a web3 compatible browser')
  }

  return (
    <div className="App">
      <header className="App-header">
        header
      </header>
      <FontAwesomeIcon icon="coffee" />
    </div>
  );
}

export default App;
