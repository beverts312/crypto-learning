import * as React from 'react';
import { useRecoilValue } from 'recoil';
import { addressState } from '../atoms';
import { NftGallery } from './NftGallery';
import { DomainResolver } from './DomainResolver';

export function Main() {
  const addr = useRecoilValue(addressState);

  return addr ? (
    <div>
      <NftGallery />
      <DomainResolver />
    </div>
  ) : (
    <div>
      Connect wallet
    </div>
  );
}