import { Button } from '@mui/material';
import * as React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { addressState, nftsState } from '../atoms';
import { getNfts } from '../utils/opensea';


export function RetrieveNfts() {
  const addr = useRecoilValue(addressState);
  const nftAtom = useRecoilState(nftsState);

  const getEm = async () => {
    const myNfts = await getNfts(addr);
    nftAtom[1](myNfts);
  }

  const btnTest = nftAtom[0].length ? 'Refresh' : 'Retrieve';

  return (
    <div>
      <Button color="inherit" onClick={getEm}>{btnTest} NFT's from OpenSea</Button>
    </div>
  );
}