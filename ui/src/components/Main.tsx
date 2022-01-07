import * as React from 'react';
import { useRecoilValue } from 'recoil';
import { addressState } from '../atoms';

export function Main() {
  const addr = useRecoilValue(addressState);

  return (
    <div>
      {addr}
    </div>
  );
}