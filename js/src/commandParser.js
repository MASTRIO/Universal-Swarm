// Functions
function parse(commandArgs, user, global, username, playersOnline) {
    switch (commandArgs[0]) {
        case "/help":
            user.emit('recieve console log message', "| - /help (Shows this text)");
            user.emit('recieve console log message', "| - /online (Tells you how many players are online)");
            user.emit('recieve console log message', "| - /shout <message> (Make big loud message go brrrrrrrr poggers)");
            user.emit('recieve console log message', "| == Testing ==");
            user.emit('recieve console log message', "| - /tests (tests server/client command)");
            user.emit('recieve console log message', "| - /completeQuest (tests quest completion)");
            user.emit('recieve console log message', "| - /amogus (a m o g u s)");
            break;
        case "/online":
            user.emit('recieve console log message', `| There are ${playersOnline} other players online`);
            break;
        case "/shout":
            global.emit('recieve user shout chat message', commandArgs[1], username)
            break;
        case "/test":
            user.emit('recieve console log message', "| Yay you testing lol");
            global.emit('recieve console chat message', "Someone tested stuff, poggers")
            break;
        case "/completequest":
            user.emit('recieve console log message', "| You have completed a quest!");
            global.emit('recieve blacklisted console chat message', `${username} has completed a quest!`, username)
            break;
        case "/amogus":
            user.emit('recieve console log message', "You are a sussy baka")
            global.emit('recieve blacklisted console chat message', `${username} is a sussy baka`, username)
            break;
        default:
            user.emit('recieve console log message', "[ERROR]: INVALID COMMAND");
            break;
    }
    user.emit('recieve console log message', "<br>");
}

// Export Module
module.exports = { parse }