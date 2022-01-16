import { ImageList, ImageListItem } from '@mui/material';
import * as React from 'react';
import { useRecoilValue } from 'recoil';
import { nftsState } from '../atoms';
import { RetrieveNfts } from './Retrieve';


export function NftGallery() {
    const nfts = useRecoilValue(nftsState);
    const images = nfts.map(item => (
        (<ImageListItem key={item.previewUri}>
            <img
                src={`${item.previewUri}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.previewUri}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.name}
                loading="lazy"
            />
        </ImageListItem>)
    ));

    return (
        <div>
            <RetrieveNfts />
            <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
                {images}
            </ImageList>
        </div>
    );
}