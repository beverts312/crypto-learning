---
title: Helium
type: docs
description: The People's Network
---

Helium is a decentralized wireless network

### Components
* WHIP - Narrowband wireless protocol, cheap, long range, low power, open source,
* Hotspots - provide wireless coverage, connect devices and routers
* Devices - connect to hotspots using WHIP
* Routers - internet deployed apps, recieve traffic from devices (via hotspots) and route them where they need to go. HA routers provided by the network but you can run your own

### Concepts
* [Proof of coverage](https://docs.helium.com/blockchain/proof-of-coverage/) - For proving hotspots are proving wireless coverage to an area
* Proof of serialization - To achieve time consensus, used to validate proof of coverage is real
* Proof of location - For proving hotspots are where they say they are, uses TDoA (whitepaper pg 12)
* [Helium Consensus Protocol](https://docs.helium.com/blockchain/consensus-protocol/) - Based off HoneyBadgerBFT, miners submit proofs which translate to scores for miners, best miners get elected to consensus group

### Other Concepts

Full Node vs Light Client - full nodes have full history (routers), light clients only have a moving window of history (hotspots)



### Useful Resources
* [main site](https://www.helium.com/)
* [helium explorer](https://explorer.helium.com/hotspots/112NeePD7A8zVMzwK9qRa8Mr8iyZK2KxZwDw8ggDi5TvaASuZbo) (on my hotspot)
* [whitepaper](http://whitepaper.helium.com/)