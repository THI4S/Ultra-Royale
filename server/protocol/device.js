const Crypto = require('./crypto');

function Device(client, mongoose) {
    this.client = client
    this.crypto = new Crypto()
    this.mongoose = mongoose
    this.player = null
    this.userObject = null
    this.cardsOutOfDeck = null;
    this.searchingBattle = false;
    this.battleOpponent = null;
}

module.exports = Device