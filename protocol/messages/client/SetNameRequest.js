module.exports = class SetNameRequest {
    constructor(device, reader) {
        this.device = device
        this.reader = reader
    }

    decode() {
    }

    process() {
        this.name = this.reader.readIString();
        this.unk = this.reader.readRrsInt32();
        console.log(this.unk)
        let ChangeName = new global.CommandsFactory.serverCommands.ChangeName(this.device, this.name);
        ChangeName.encode();
        ChangeName.send(true);
    }
}

module.exports.code = 19863