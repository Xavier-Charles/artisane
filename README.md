# Artisane

Artisane is a platform that seeks to connect digital creators to collectors.

### The Project
Artisane showcases digital art to a wide audience. Basically we accept artwork from digital artists and place them in the hands of collectors.

### The Problem 
The creator economy is huge. It is really hard for artists to get visibility especially for those coming from Third world countries. 

### Our Solution
We are building a platform that collects art from talented digital artists and allow the public to vote on these artworks. Top artworks will be put into a collection and auctioned. Proceeds are then shared between the Artist, the Artisane DAO and the a charitable cause.
 
### The Tech 

The platform comprises of various aspects:

#### The voting application https://artisane.vercel.app/contest
Voting is gasless hence will be built on IPFS once the user connects & verifies a wallet (Using Moralis SDK) to vote. 
Votes are stored on IPFS and can be verified. (Similar to [Tribunals](https://github.com/Xavier-Charles/tribunal)). We are consideirng using a humanity check solution. e.g Worldcoin

#### The artist application
A react app with a easy-to-use interface. Artwork submission and evaluation. Work is uploaded to IPFS and the CID of the upload is shared with the user via email.

#### The auction application - Whitelisted wallets will be able to place bids. After a timelapse the Artisane contract mints and transfers the NFT to the wallet of the winning bid.


NFTs will be minted on the Ethereum mainnet or any other Layer Two network.


### The Vision 

The vision is to build tools, projects, organise social events that give artists more freedom to express their ideas and also bring them closer to the community that appreciates their art. 
