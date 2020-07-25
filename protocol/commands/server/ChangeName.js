const Command = require('../../command');

module.exports = class ChangeName extends Command {
    constructor(device, name) {
        super()
        this.code = 278
        this.device = device
        this.name = name
    }

    encode() {
        this.data.writeIString(this.name);
        this.data.writeRrsInt32(0);
        this.data.writeRrsInt32(0);
        this.data.writeRrsInt32(0);
        this.data.writeRrsInt32(0);
        this.data.writeRrsInt32(1);
        this.data.writeRrsInt32(6);
        this.data.writeByte(127);
        this.data.writeByte(127);
        this.data.writeRrsInt32(0);
        this.data.writeRrsInt32(0);

        this.device.player.name = this.name;
        this.device.player.nameChangesCount++;
        this.device.player.save();
    }
}