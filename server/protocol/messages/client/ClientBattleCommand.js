const ByteBuffer = require('../../../utils/bytebuffer-sc');

module.exports = class ClientBattleCommand {
    constructor(device, reader) {
        this.device = device
        this.reader = reader
    }

    decode() {
        console.log('Client Battle Command \n', this.reader.toString('hex'))
       /* this.tick = this.reader.readRrsInt32();
        this.checksum = this.reader.readRrsInt32();
        this.commandsCount = this.reader.readRrsInt32();
        for (let index = 0; index < this.commandsCount; index++) {
            let commandID = this.reader.readRrsInt32();
            try {
                if (global.CommandsFactory.clientCommands[commandID]) {
                    let Command = global.CommandsFactory.clientCommands[commandID];
                    Command = new BattleCommand(this.device, this.reader);
                    Command.decode();
                    Command.process();
                }
                else {
                    console.log(`Command ${commandID} is unhandled`, this.reader.toString('hex'));
                    break;
                }
            } catch (err) {
                console.log(`An error occoured processing battle command ${commandID}: \n`, err);
            }
        }*/
        let bb = new ByteBuffer(200);
        bb.append(Buffer.from('733C00001C000003', 'hex'))
        bb.writeRrsInt32(this.device.battleOpponent.player.highID)
        bb.writeRrsInt32(this.device.battleOpponent.player.lowID)
        bb.append(Buffer.from('01BD2F000113', 'hex'))

        console.log(bb.buffer)
        this.device.battleOpponent.client.write(bb.buffer)
    }

    process() {


    }
}

module.exports.code = 16068