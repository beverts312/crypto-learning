import * as React from 'react';
import { useRecoilValue } from 'recoil';
import { addressState } from '../atoms';
import { Profile } from './Profile';

export function Main() {
  const addr = useRecoilValue(addressState);

  return (
    <div>
      {addr}
      <Profile />
    </div>
  );
}