module.exports = class SearchClan {
    constructor(device, reader) {
        this.device = device
        this.reader = reader
    }

    decode() {
        try {
            this.clanString = this.reader.readIString();
        }
        catch (err) {
            this.unk3 = this.reader.readInt32();
        }
        this.stateResID = this.reader.readRrsInt32();
        this.stateID = this.reader.readRrsInt32();
        this.minMembers = this.reader.readInt32();
        this.unk1 = this.reader.readInt32();
        this.minTrophies = this.reader.readInt32();
        this.onlyClansThatICanJoin = this.reader.readByte();
        this.unk2 = this.reader.readInt32();
        console.log(this.clanString)
        if (this.clanString.startsWith('/')) {
            const args = this.clanString.slice(1).trim().split(/ +/g);
            const command = args.shift().toLowerCase();
            switch (command) {

                case 'addchest':
                    if (this.device.player.chests.length <= 4 && args[0] !== null) {
                        if (args[1] === true) {
                            for (let index = 0; index < 4; index++) {
                                this.device.player.chests.push({
                                    chestID: parseInt(args[0]),
                                    isUnlocked: true
                                });
                            }
                        }
                        else {
                            this.device.player.chests.push({
                                chestID: parseInt(args[0]),
                                isUnlocked: true
                            });
                        }
                        this.device.player.save();
                        this.device.client.end();
                    }
                    break;
                case 'fillslots':
                    if (this.device.player.chests.length < 4) {
                        let remainingFreeSlots = 4 - this.device.player.chests.length;
                        for (let index = 0; index < remainingFreeSlots; index++) {
                            this.device.player.chests.push({
                                chestID: parseInt(args[0]),
                                isUnlocked: true
                            });
                        }
                        this.device.player.save();
                        this.device.client.end();
                    }
                    break;
            }
        }
    }

    process() {

    }
}

module.exports.code = 10949