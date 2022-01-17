import { Button, TextField, Stack } from '@mui/material';
import * as React from 'react';
import { resolveDomain } from '../utils';


export function DomainResolver() {
    const domainFieldRef = React.createRef<HTMLInputElement>();
    const [addr, setAddrState] = React.useState('');

    const resolveIt = async () => {
        const addr = await resolveDomain(domainFieldRef.current?.value || '');
        setAddrState(addr || '');
    }

    return (
        <div>
            <Stack spacing={2} width="300px">
                <div>{addr}</div>
                <TextField label="Address" inputRef={domainFieldRef} variant="filled" />
                <Button color="info" onClick={resolveIt}>Resolve</Button>
            </Stack>

        </div>
    );
}