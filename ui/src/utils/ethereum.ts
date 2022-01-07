import { ethers } from 'ethers';

declare global {
    interface Window {
      ethereum: any;
    }
}

export function getProvider(): ethers.providers.Web3Provider {
    return new ethers.providers.Web3Provider(window.ethereum);
}
