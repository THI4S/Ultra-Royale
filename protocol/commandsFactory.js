const fs = require('fs');

module.exports = class CommandsFactory {
    constructor() {
        CommandsFactory.clientCommands = {};
        CommandsFactory.serverCommands = {};
        CommandsFactory.loadResponses();

        global.CommandsFactory = CommandsFactory
        console.log(`Loaded ${Object.keys(CommandsFactory.clientCommands).length} client commands and ${Object.keys(CommandsFactory.serverCommands).length} server commands!`);
    }

    static loadResponses() {
        let serverCommands = fs.readdirSync('./protocol/commands/server')
        serverCommands.forEach(command => {
            let serverCommand = require(`./commands/server/${command}`)
            CommandsFactory.serverCommands[serverCommand.name] = serverCommand
            CommandsFactory.serverCommands[serverCommand.code] = serverCommand
        })

        let clientCommands = fs.readdirSync('./protocol/commands/client')
        clientCommands.forEach(command => {
            let clientCommand = require(`./commands/client/${command}`)
            CommandsFactory.clientCommands[clientCommand.name] = clientCommand
            CommandsFactory.clientCommands[clientCommand.code] = clientCommand
        })
    }
}