module.exports = class CancelBattle {
    constructor(device, reader) {
        this.device = device
        this.reader = reader
    }

    decode() {

    }

    process() {
        let CancelBattleOk = new global.MessageFactory.serverMessages.CancelBattleOk(this.device);
        CancelBattleOk.encode();
        CancelBattleOk.send(true);
    }
}

module.exports.code = 12269