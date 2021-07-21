// Functions
function parse(commandArgs, user, global, username, playersOnline) {
    switch (commandArgs[0]) {
        case "/help":
            user.emit('recieve console log message', "| - /help (Shows this text)");
            user.emit('recieve console log message', "| - /online (Tells you how many players are online)");
            user.emit('recieve console log message', "| == Testing ==");
            user.emit('recieve console log message', "| - /tests (tests server/client command)");
            user.emit('recieve console log message', "| - /completeQuest (tests quest completion)");
            break;
        case "/online":
            user.emit('recieve console log message', `| There are ${playersOnline} other players online`);
            break;
        case "/test":
            user.emit('recieve console log message', "| Yay you testing lol");
            global.emit('recieve console log message', "| Someone tested stuff, poggers")
            break;
        case "/completeQuest":
            user.emit('recieve console log message', "| You have completed a quest!");
            global.emit('recieve blacklisted console log message', `| ${username} has completed a quest!`, username)
            break;
        case "/amogus":
            global.emit('recieve console log message', `${username} is a sussy baka`)
            break;
        default:
            user.emit('recieve console log message', "[ERROR]: INVALID COMMAND");
            break;
    }
    user.emit('recieve console log message', "^");
}

// Export Module
module.exports = { parse }