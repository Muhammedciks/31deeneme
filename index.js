require("http").createServer((req, res) => res.end("TNhazem")).listen(process.env.PORT || 8080)
const DGH_BOT = require("./structures/Client");
const Discord = require("discord.js");
const client = new DGH_BOT();
client.start();
require("./structures/antiCrash")(client);
require("./handlers/handler")(client);
require("./handlers/interaction")(client);

client.login(process.env.TOKEN);
