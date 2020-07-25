module.exports = class Login {
    constructor(device, reader) {
        this.device = device
        this.reader = reader
    }

    decode() {
        this.highID = this.reader.readInt32();
        this.lowID = this.reader.readInt32();
        this.token = this.reader.readIString();
        this.majorV = this.reader.readRrsInt32();
        this.minorV = this.reader.readRrsInt32();
        this.build = this.reader.readRrsInt32();
        this.resourceSHA = this.reader.readIString();
        this.unk111 = this.reader.readInt32();
        this.unk1 = this.reader.readIString();
        this.unk2 = this.reader.readIString();
        this.deviceModel = this.reader.readIString();
        this.unk3 = this.reader.readIString();
        this.deviceOSVersion = this.reader.readIString();
        this.unk18 = this.reader.readByte();
        this.unk19 = this.reader.readInt32();
        this.againUnk2 = this.reader.readIString();
        this.preferredDeviceLanguage = this.reader.readIString();
        this.unk6 = this.reader.readByte();
        this.preferredLanguage = this.reader.readByte();
        this.unk8 = this.reader.readInt32();
        this.unk9 = this.reader.readByte();
        this.unk10 = this.reader.readInt32();
        this.unk11 = this.reader.readByte();
        this.unk12 = this.reader.readInt32();
        this.unk13 = this.reader.readInt32();
        this.unk14 = this.reader.readInt32();
        this.unk15 = this.reader.readInt32();
        this.unk16 = this.reader.readByte();
        this.unk17 = this.reader.readByte();
    }

    process() {
        console.log(JSON.stringify({
            highID: this.highID,
            lowID: this.lowID,
            token: this.token
        }));
        this.device.userObject = Object.assign({}, {
            highID: this.highID,
            lowID: this.lowID,
            token: this.token
        })
        this.device.mongoose.getPlayer(this.device, (err, player) => {
            this.device.player = player;
            // console.log(this.resourceSHA)
            // if (this.resourceSHA !== global.fingerprint.contentPatchHash && global.fingerprint.contentPatchHash) {
                //  let LoginFailed = new global.MessageFactory.serverMessages.LoginFailed(this.device, 7, '');
                // LoginFailed.encode();
                // LoginFailed.send(false);
           // }
            //else {
                let LoginOk = new global.MessageFactory.serverMessages.LoginOk(this.device);
                LoginOk.encode();
                LoginOk.send(true);

                let OwnHomeData = new global.MessageFactory.serverMessages.OwnHomeData(this.device);
                OwnHomeData.encode();
                OwnHomeData.send(true);
         //   }
        });
    }
}

module.exports.code = 10101