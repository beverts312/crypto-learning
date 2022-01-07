import { atom } from 'recoil';

export const addressState = atom<string>({
    key: 'addr',
    default: ''
});