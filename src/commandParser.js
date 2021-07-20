// Functions
function parse(commandArgs, username, user, global) {
    switch (commandArgs[0]) {
        case "/help":
            user.emit('recieve console message', "~~~~~~~~~~~~~~~Help~~~~~~~~~~~~~~~");
            user.emit('recieve console message', "- /help (Shows this text)");
            user.emit('recieve console message', "- /tests (tests server/client command)");
            user.emit('recieve console message', "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
            break;
        case "/test":
            user.emit('recieve console message', "Yay you testing lol");
            global.emit('recieve console message', "Someone tested stuff, poggers")
            break;
        case "/completeQuest":
            user.emit('recieve console message', "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
            user.emit('recieve console message', "You have completed a quest!");
            user.emit('recieve console message', "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
            global.emit('recieve console message', `${username} has completed a quest!`)
            break;
        default:
            user.emit('recieve console message', "ERROR: INVALID COMMAND");
            break;
    }
}

module.exports = { parse }