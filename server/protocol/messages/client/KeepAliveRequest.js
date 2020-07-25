module.exports = class KeepAliveRequest {
    constructor(device, reader) {
        this.device = device
        this.reader = reader
    }

    decode() {
    }

    process() {
        let KeepAliveOk = new global.MessageFactory.serverMessages.KeepAliveOk(this.device);
        KeepAliveOk.encode();
        KeepAliveOk.send(true);
    }
}

module.exports.code = 19911