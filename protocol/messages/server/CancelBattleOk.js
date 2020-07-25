const Processor = require('../../processor')

module.exports = class CancelBattleOk extends Processor {
    constructor(device) {
        super()
        this.device = device
        this.code = 20817
        this.version = 1
    }

    encode() {
        this.device.searchingBattle = false;
    }
}

module.exports.code = 20817
