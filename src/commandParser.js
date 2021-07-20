// Functions
function parse(commandArgs, user, global) {
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
        default:
            user.emit('recieve console message', "ERROR: INVALID COMMAND");
            break;
    }
}

module.exports = { parse }