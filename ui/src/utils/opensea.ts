import { NftAsset } from '../atoms';

export async function getNfts(addr: string): Promise<NftAsset[]> {
    const req = await fetch(`https://api.opensea.io/api/v1/assets?owner=${addr}`);
    if (req.status > 299) {
        throw Error(await req.text());
    }
    const assets: any[] = (await req.json())['assets'];
    console.log(assets[0]);
    return assets.map(value => {
        return new NftAsset(
            value.name, 
            value.image_url ? value.image_url : value.asset_contract.image_url,
            value.collection ? value.collection.name : 'N/A'
        );
    });
}