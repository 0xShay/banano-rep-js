# banano-rep-js
## functions.md
**Please note:** all functions are asynchronous, so you should either `await` for a response inside an `async function` or use `.then()` when making method calls.
All Banano-related values returned are returned in raw units. *(1 Banano = 1e29 raw)*

`getRepWeight(representativeAddress)` returns raw delegated voting weight to `representativeAddress`

`repPercentage(representativeAddress)` returns the % of online weight that `representativeAddress` has

`getOnlineRepresentatives()` returns an object of objects regarding every online representative and their respective raw voting weights

`getOnlineWeight()` returns total raw online network voting weight

`accountInfo(address)` returns information about `address` eg. balance, frontier block

`setEndpoint(endpoint)` sets the endpoint to `endpoint` (`https://api-beta.banano.cc` by default)

### Help fund my future projects!
This script is a community-created script, you can learn more about Banano at their official Discord server [chat.banano.cc](https://chat.banano.cc) - if you're feeling generous feel free to send me some potassium!
<br /><br />
[ban_1shay5hdkere33pb5gawzcicp1197xp64y7gutbudj39jzo7extguucu5uz1](https://creeper.banano.cc/explorer/account/ban_1shay5hdkere33pb5gawzcicp1197xp64y7gutbudj39jzo7extguucu5uz1/history)
<br /><br />
![ban_1shay5hdkere33pb5gawzcicp1197xp64y7gutbudj39jzo7extguucu5uz1](https://imgur.com/HBksiOM.png)