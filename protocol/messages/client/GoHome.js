module.exports = class GoHome {
    constructor(device, reader) {
        this.device = device
        this.reader = reader
    }

    decode() {
    }

    process() {
        if (this.device.player.trainingDone) {
            let OwnHomeData = new global.MessageFactory.serverMessages.OwnHomeData(this.device);
            OwnHomeData.encode();
            OwnHomeData.send(true);
        } else {
            this.device.player.trainingDone = true
            this.device.player.save();
            let OwnHomeData = new global.MessageFactory.serverMessages.OwnHomeData(this.device);
            OwnHomeData.encode();
            OwnHomeData.send(true);
        }
    }
}

module.exports.code = 14560