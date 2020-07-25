const Processor = require('../../processor')

module.exports = class KeepAliveOk extends Processor {
    constructor(device) {
        super()
        this.device = device
        this.code = 24135
        this.version = 1
    }

    encode() {
    }
}

module.exports.code = 24135
