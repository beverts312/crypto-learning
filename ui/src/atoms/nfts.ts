import { atom } from 'recoil';

export class NftAsset {
    constructor(
        public name: string, 
        public previewUri?: string,
        public collection?: string
    ) {}
}

export const nftsState = atom<NftAsset[]>({
    key: 'nft',
    default: []
});