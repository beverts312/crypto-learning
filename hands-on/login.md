---
title: Login
type: docs
description: Login flow using an ethereum wallet
---

Every ethereum wallet consists of a public key and private key, the private key is only known (or should only be known) by the owner of the wallet. Because of this we can validate wallet ownership by asking the owner to sign a generated message with their key and then validating that the signed message matches what we would expect using the public key.

![](../../arch/login.png)

Tools like [Metamask](https://metamask.io/) allow us to interact with wallets using javascript. Metamask can manage the private keys itself or the private keys can be managed on a secure hardware wallet such as a [ledger](https://www.ledger.com/) and anytime metamask needs to perform an operation that leverages the private key it will offload that part of the flow to the hardware wallet.

For the UI layer I chose to use [ethers.js](https://docs.ethers.io/v5/) to make it easier to interact with the ethereum blockchain.

This is roughly the ui login code:
{{< card-code header="**Initialize ethers provider/signer**" lang="javascript" >}}
const provider = new ethers.providers.Web3Provider(window.ethereum);    // Initialize ethers
await provider.send("eth_requestAccounts", []);                         // Prompt to connect wallet (if not already connected)
const signer = provider.getSigner();                                    // Initialize signer
const address = await signer.getAddress();                              // Get the connected address (multiple addresses can be managed by metamask)
const challange = await getChallenge(address);                          // Retrieve challenge from api (simple fetch api call)
const signedChallenge = await signer.signMessage(challange);            // Ask to sign message, will prompt user in ui and on hardware wallet if connected
const jwt = await getJwt(address, signedChallenge);                     // Retrieve jwt from api (simple fetch api call)
{{< /card-code >}}

For the api I chose to use [web3.py](https://web3py.readthedocs.io/en/stable/) to make it easier to interact with the etherum block chain.
To create the challenge I simlply generate a uuid, the uuid is stored in the db (associated with the user who requested the challenge) and then returned to the user.

This is roughly the code to validate the signature:
{{< card-code header="**Retrieve and validate challenge**" lang="python" >}}
stored_challenge = UserChallenge.get_challenge(addr).get("challenge")   # get challenge from db
w3 = Web3()                                                             # initial web3 lib
account = w3.eth.account.recover_message(                               # use stored challenge with signed challenge to retrieve address
    encode_defunct(text=stored_challenge),
    signature=challenge_to_validate,
)
if acct == addr:                                                        # ensure signing address matches challenge address
    return generate_jwt(addr)
else:
    return 401
{{< /card-code >}}

