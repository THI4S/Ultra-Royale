const Processor = require('../../processor')

module.exports = class UdpServerInfos extends Processor {
    constructor(device) {
        super()
        this.device = device
        this.code = 25513
        this.version = 0
    }

    encode() {
        this.data.append(Buffer.from('63A90000620000BB9101', 'hex'))
        this.data.writeRrsInt32(9338);
        this.data.writeIString('192.168.1.6');
        this.data.writeIString('oM.Z.î^.}S');
        this.data.writeIString('oWeQRYzA9nLyqWfd1-VxQ-PrnhHR9GcewMjxpZje8JA');
    }
}

module.exports.code = 25513
