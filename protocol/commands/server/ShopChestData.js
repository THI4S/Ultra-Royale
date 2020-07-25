const Command = require('../../command');

module.exports = class ShopChestData extends Command {
    constructor(device, slotID) {
        super()
        this.code = 393
        this.device = device
        this.slotID = slotID
    }

    encode() {
        this.data.writeRrsInt32(1);
        this.data.writeRrsInt32(0);
        this.data.writeRrsInt32(3);// Cards count????
        this.data.writeRrsInt32(1);//Card ID

        this.data.writeRrsInt32(this.device.player.highID);
        this.data.writeRrsInt32(this.device.player.lowID);
        this.data.writeRrsInt32(999);//Card count
        this.data.writeRrsInt32(0);
        this.data.writeRrsInt32(0);
        this.data.writeByte(127);
        this.data.writeRrsInt32(0);
        this.data.writeRrsInt32(15);//card type
        
        this.data.writeRrsInt32(this.device.player.highID);
        this.data.writeRrsInt32(this.device.player.lowID);
        this.data.writeRrsInt32(1);
        this.data.writeRrsInt32(0);
        this.data.writeRrsInt32(0);
        this.data.writeByte(127);
        this.data.writeRrsInt32(0);
        this.data.writeRrsInt32(15);

        this.data.writeRrsInt32(this.device.player.highID);
        this.data.writeRrsInt32(this.device.player.lowID);
        this.data.writeRrsInt32(1);
        this.data.writeRrsInt32(0);
        this.data.writeRrsInt32(0);
        this.data.writeByte(127);
        this.data.writeRrsInt32(0);
        this.data.writeByte(127);
        this.data.writeRrsInt32(999999);
        this.data.writeRrsInt32(0);
        this.data.writeRrsInt32(this.slotID);// Chest slot

        this.data.writeRrsInt32(1);
        this.data.writeRrsInt32(3);
        this.data.writeByte(127);
        this.data.writeByte(127);
        this.data.writeRrsInt32(0);
        this.data.writeRrsInt32(0);
    }
}
