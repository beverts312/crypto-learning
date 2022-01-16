import * as React from 'react';
import { useRecoilValue } from 'recoil';
import { addressState } from '../atoms';
import { NftGallery } from './NftGallery';

export function Main() {
  const addr = useRecoilValue(addressState);

  return addr ? (
    <div>
      <NftGallery />
    </div>
  ) : (
    <div>
      Connect wallet
    </div>
  );
}