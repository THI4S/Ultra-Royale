const ByteBuffer = require('../../../utils/bytebuffer-sc');

module.exports = class EndClientTurn {
    constructor(device, reader) {
        this.device = device
        this.reader = reader
    }

    decode() {
        this.tick = this.reader.readRrsInt32();
        this.checksum = this.reader.readRrsInt32();
        this.commandsCount = this.reader.readRrsInt32();
        for (let index = 0; index < this.commandsCount; index++) {
            let commandID = this.reader.readRrsInt32();
            try {
                if (global.CommandsFactory.clientCommands[commandID]) {
                    let Command = global.CommandsFactory.clientCommands[commandID];
                    Command = new Command(this.device, this.reader);
                    Command.decode();
                    Command.process();
                }
                else {
                    console.log(`Command ${commandID} is unhandled`, this.reader.toString('hex'));
                    break;
                }
            } catch (err) {
                console.log(`An error occoured processing command ${commandID}: \n`, err);
            }
        }
    }

    process() {


    }
}

module.exports.code = 18688