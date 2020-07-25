const ByteBuffer = require('../utils/bytebuffer-sc');

module.exports = class Processor {
    constructor(device) {
        this.code = null
        this.version = null
        this.data = new ByteBuffer(2048)
        this.device = device
    }

    send() {
        try {
            this.buildPacket(this.code, this.data.buffer, this.version, finalPacket => {
                this.device.client.write(finalPacket);
            })
        }
        catch (err) {
            console.log('An error occoured trying to send', this.code, '\n', err);
        }
    }

    buildPacket(code, payload, version, callback) {
        let crypted = payload;
        crypted = this.device.crypto.encrypt(code, payload)
        let header = Buffer.alloc(7);
        header.writeUInt16BE(code, 0);
        header.writeUIntBE(crypted.length, 2, 3)
        header.writeUInt16BE(version, 5)
        callback(Buffer.concat([header, crypted]));
    }
}