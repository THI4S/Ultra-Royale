const Packetizer = require('./packetizer');
const packetizer = new Packetizer();
const MessagesFactory = require('./messagesFactory');
const CommandsFactory = require('./commandsFactory');
const ByteBuffer = require('../utils/bytebuffer-sc');
const fs = require('fs');

module.exports = class PacketHandler {

    constructor() {
        this.messagesFactory = new MessagesFactory();
        this.commandsFactory = new CommandsFactory();
        global.phan = this;
    }


    handle(data, device) {
        device = device;
        packetizer.packetize(data, (packet) => {
            var message = {
                identifier: packet.readUInt16BE(0),
                length: packet.readUIntBE(2, 3),
                version: packet.readUInt16BE(5),
                payload: packet.slice(7, packet.length)
            };
            message.payload = device.crypto.decrypt(message.identifier, message.payload);
            try {
                if (PacketHandler.createResponse(message.identifier)) {
                    let messageInstance = PacketHandler.createResponse(message.identifier);
                    //console.log(`Processing packet ${messageInstance.name} (${message.identifier})`)
                    messageInstance = new messageInstance(device, ByteBuffer.fromBinary(message.payload))
                    messageInstance.decode();
                    messageInstance.process();
                }
                else {
                    console.log(`Packet ${message.identifier} is unhandled`);
                }
            } catch (err) {
                console.log(`An error occoured processing packet ${message.identifier}: \n`, err);
            }
        });
    }

    static createResponse(response) {
        return MessagesFactory.clientMessages[response];
    }
}