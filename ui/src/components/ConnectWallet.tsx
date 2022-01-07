import { Button } from '@mui/material';
import * as React from 'react';
import { useRecoilState } from 'recoil';
import { getProvider } from '../utils/ethereum';
import { addressState } from '../atoms';

export function ConnectWallet() {
  const setAddress = useRecoilState(addressState)[1];
  const connect = async () => {
    const provider = getProvider();
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const address = await signer.getAddress();
    setAddress(address);
  }

  return (
    <div>
      <Button color="inherit" onClick={connect}>Connect Wallet</Button>
    </div>
  );
}