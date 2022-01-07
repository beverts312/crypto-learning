import { Button } from '@mui/material';
import * as React from 'react';
import { SetterOrUpdater, useRecoilState, useRecoilValue } from 'recoil';
import { getProvider } from '../utils/ethereum';
import { addressState, jwtState } from '../atoms';
import { getChallenge, getJwt } from '../utils';

export function Login() {
  const address = useRecoilValue(addressState);
  const jwtSetter = useRecoilState(jwtState)[1];
  
  const login = async (addr: string, setJwt: SetterOrUpdater<string>) => {
    const provider = getProvider();
    const signer = provider.getSigner();
    const challange = await getChallenge(addr);
    const signedChallenge = await signer.signMessage(challange);
    const jwt = await getJwt(address, signedChallenge);
    setJwt(jwt);
  }

  return (
    <div>
      <Button color="inherit" onClick={() => login(address, jwtSetter)}>Login</Button>
    </div>
  );
}