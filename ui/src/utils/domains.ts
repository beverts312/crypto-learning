import { Resolution } from '@unstoppabledomains/resolution';
import { getProvider } from './ethereum';

const UNSTOPPABLE_EXTENSIONS = [
    'crypto',
    'nft',
    'coin',
    'wallet',
    'bitcoin',
    'x',
    '888',
    'dao',
    'blockchain'
];

export async function resolveDomain(domain: string) {
    const domainParts = domain.split('.');
    const extension = domainParts[domainParts.length - 1];
    if (extension === 'eth') {
        const provider = getProvider();
        return await provider.resolveName(domain);
    } else if (UNSTOPPABLE_EXTENSIONS.includes(extension)) {
        const resolution = new Resolution();
        return await resolution.addr(domain, 'ETH');
    } else {
        throw Error('Unsupported extension');
    }
}