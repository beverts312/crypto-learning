const getUrl = (resource: string) => `https://crypto.baileyeverts.net/api/${resource}`;


export async function getChallenge(addr: string): Promise<string> {
    const res = await fetch(getUrl(`challenge?addr=${addr}`))
    if (res.status !== 200) {
        throw Error(await res.text());
    }
    return await res.text();
}

export async function getJwt(addr: string, signedChallenge: string): Promise<string> {
    const res = await fetch(getUrl('login'), { method: 'POST', body: JSON.stringify({
        addr: addr,
        challenge: signedChallenge
    })});
    if (res.status !== 200) {
        throw Error(await res.text());
    }
    return await res.text();
}

export async function updateUser(addr: string, name: string, jwt: string): Promise<void> {
    console.log('ehh');
    const res = await fetch(getUrl('profile'), { 
        method: 'POST', 
        body: JSON.stringify({
            addr: addr,
            name: name
        }),
        headers: {
            'special-auth': `Bearer ${jwt}`
        }
    });
    if (res.status > 299) {
        alert(res.text);
    }
}