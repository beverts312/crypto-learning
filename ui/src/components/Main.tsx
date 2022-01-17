import * as React from 'react';
import { useRecoilValue } from 'recoil';
import { addressState } from '../atoms';

export function Main() {
  const addr = useRecoilValue(addressState);

  return addr ? (
    <div>
      Your wallet address is {addr}
    </div>
  ) : (
    <div>
      Connect wallet
    </div>
  );
}