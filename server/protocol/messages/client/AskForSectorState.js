module.exports = class AskForSectorState {
    constructor(device, reader) {
        this.device = device
        this.reader = reader
    }

    decode() {
    }

    process() {
        let SectorState = new global.MessageFactory.serverMessages.SectorState(this.device);
        SectorState.encode();
        SectorState.send(true);
    }
}

module.exports.code = 18031