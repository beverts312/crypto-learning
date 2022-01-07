import * as React from 'react';
import { useRecoilValue } from 'recoil';
import { addressState, jwtState } from '../atoms';
// import { updateUser } from '../utils';


export function Profile() {
  const addr = useRecoilValue(addressState);
  const jwt = useRecoilValue(jwtState);
  let text = 'initialized';
  if (jwt) {
    text = jwt
    // updateUser(addr, 'fake', jwt).then(() => { 
    //   text = 'updated';
    // }).catch(err => {
    //   text = err;
    // });
  } else {
    text = addr;
  }

  return (
    <div>{text}</div>
  );
}