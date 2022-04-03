const Processor = require('../../processor')

module.exports = class LoginOk extends Processor {
    constructor(device) {
        super()
        this.device = device
        this.code = 22280
        this.version = 1
    }

    encode() {
        this.data.writeInt32(this.device.player.highID);
        this.data.writeInt32(this.device.player.lowID);
        this.data.writeInt32(this.device.player.highID);
        this.data.writeInt32(this.device.player.lowID);
        this.data.writeIString(this.device.player.token);
        this.data.writeIString('');
        this.data.writeIString('');
        this.data.writeRrsInt32(global.config.server.clientMajorVersion);
        this.data.writeRrsInt32(global.config.server.clientMinorVersion);
        this.data.writeRrsInt32(global.config.server.clientMinorVersion);
        this.data.writeRrsInt32(global.config.server.clientBuild);
        this.data.writeIString(global.config.server.serverType);
        this.data.writeRrsInt32(0);//sessionCount
        this.data.writeRrsInt32(0);//playTimeSeconds
        this.data.writeRrsInt32(0);//daysSinceStartedPlaying
        this.data.writeIString('1475268786112433');//Fb id
        this.data.writeIString(Date.now().toString());//Servertime
        this.data.writeIString(Date.now().toString());//accountCreatedDate
        this.data.writeByte(0);
        this.data.writeIString('');
        this.data.writeIString('');
        this.data.writeIString('');
        this.data.writeIString('IT');//State
        this.data.writeIString('CR City');//City
        this.data.writeIString('20');//Country code
        this.data.writeRrsInt32(1);
        this.data.writeRrsInt32(455500);
        this.data.writeRrsInt32(115500);
        this.data.writeRrsInt32(2);
        this.data.writeIString(global.config.server.gameAssetsUrl);//City
        this.data.writeIString('https://game-assets.clashroyaleapp.com');//Country code
        this.data.writeRrsInt32(1);
        this.data.writeIString(global.config.server.eventAssetsUrl);
    }
}

module.exports.code = 22280
