const Processor = require('../../processor')

module.exports = class LoginFailed extends Processor {
    constructor(device, errorCode, reason) {
        super()
        this.errorCode = errorCode
        this.reason = reason
        this.device = device
        this.code = 20103
        this.version = 4
    }

    encode() {
        this.data.writeRrsInt32(this.errorCode); //err code
        this.data.writeIString(global.fingerprint.fingerprintData); //fingerprint
        this.data.writeIString(global.config.server.redirectUrl); //redirect
        this.data.writeIString(global.config.server.updateUrl); //idk
        this.data.writeIString(this.reason); //Reason
        this.data.writeByte(127);
        this.data.writeRrsInt32(0);
        this.data.writeIString(''); //update url
        this.data.writeRrsInt32(2); //unk
        this.data.writeIString(global.config.server.gameAssetsUrl); //unk
        this.data.writeIString(global.config.server.contentUrl); //unk
    }
}

module.exports.code = 20103
