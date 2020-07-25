const fs = require('fs');

module.exports = class MessageFactory {
    constructor() {
        MessageFactory.clientMessages = {};
        MessageFactory.serverMessages = {};
        MessageFactory.loadResponses();

        global.MessageFactory = MessageFactory
        console.log(`Loaded ${Object.keys(MessageFactory.clientMessages).length} client messages and ${Object.keys(MessageFactory.serverMessages).length} server messages!`);
    }

    static loadResponses() {
        let serverPackets = fs.readdirSync('./protocol/messages/server')
        serverPackets.forEach(packet => {
            let serverPacket = require(`./messages/server/${packet}`)
            MessageFactory.serverMessages[serverPacket.name] = serverPacket
            MessageFactory.serverMessages[serverPacket.code] = serverPacket
        })

        let clientPackets = fs.readdirSync('./protocol/messages/client')
        clientPackets.forEach(packet => {
            let clientPacket = require(`./messages/client/${packet}`)
            MessageFactory.clientMessages[clientPacket.name] = clientPacket
            MessageFactory.clientMessages[clientPacket.code] = clientPacket
        })
    }
}