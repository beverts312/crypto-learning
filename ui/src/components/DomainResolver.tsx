import { Button } from '@mui/material';
import * as React from 'react';
import { resolveDomain } from '../utils';


export function DomainResolver() {

    const resolveIt = async () => {
        let domain = await resolveDomain('everts.eth');
        alert(`eth: ${domain}`);
        domain = await resolveDomain('everts.crypto');
        alert(`crypto: ${domain}`);
    }


    return (
        <div>
            <Button color="inherit" onClick={resolveIt}>Resolve Address</Button>
        </div>
    );
}