const Processor = require('../../processor')

module.exports = class BattleReportStream extends Processor {
    constructor(device) {
        super()
        this.device = device
        this.code = 20032
        this.version = 0
    }

    encode() {
        this.data.writeInt32(this.device.player.highID); //PlayerHighID
        this.data.writeInt32(this.device.player.lowID); //PlayerLowID
        this.data.append(Buffer.from('010200000002A099912D010000001800C76D1E0000000631373330494F0A0002', 'hex'))
        this.data.writeIString(`{"player0":{"acc_hi":24,"acc_lo":13069598,"name":"1730IO","alliance":"the dark\'s","score":3428,"score_p":3455,"alli_hi":33,"alli_lo":1440959,"home_hi":24,"home_lo":13069598,"badge":16000095,"spells":[{"d":26000041,"l":9},{"d":26000004,"l":4},{"d":26000017,"l":6},{"d":26000000,"l":10},{"d":28000003,"l":6},{"d":28000008,"l":11},{"d":26000049,"l":9},{"d":26000021,"l":8}]},"player1":{"acc_hi":${this.device.player.highID},"acc_lo":${this.device.player.lowID},"name":"${this.device.player.name}","alliance":"i Paguri","stars":1,"score":3487,"score_p":3458,"chest":19000286,"alli_hi":2,"alli_lo":14072,"home_hi":${this.device.player.highID},"home_lo":${this.device.player.lowID},"badge":16000081,"spells":[{"d":26000021,"l":8},{"d":26000002,"l":9},{"d":28000000,"l":6},{"d":26000000,"l":9},{"d":28000008,"l":10},{"d":27000003,"l":7},{"d":26000005,"l":9},{"d":26000011,"l":7}]},"player2":{"acc_hi":0,"acc_lo":0,"alli_hi":0,"alli_lo":0,"home_hi":0,"home_lo":0},"player3":{"acc_hi":0,"acc_lo":0,"alli_hi":0,"alli_lo":0,"home_hi":0,"home_lo":0},"arena":54000024,"replayV":41,"challenge":false,"tournament":false,"friendly_challenge":false,"survival":false,"game_config":{"gmt":1,"plt":1,"gamemode":72000006,"t1s":0,"t2s":0}}`);
        this.data.writeRrsInt32(0);
        this.data.writeRrsInt32(0);
        this.data.writeRrsInt32(0);
        this.data.writeRrsInt32(0);
        this.data.writeRrsInt32(0);
        this.data.writeRrsInt32(0);
    }
}

module.exports.code = 20032
