module.exports = class ClientHello {
    constructor(device, reader) {
        this.device = device
        this.reader = reader
    }

    decode() {
        console.log(this.reader)
    }

    process() {
        let LoginFailed = new global.MessageFactory.serverMessages.LoginFailed(this.device, 7, '');
        LoginFailed.encode();
        LoginFailed.send(false);
    }
}

module.exports.code = 10100