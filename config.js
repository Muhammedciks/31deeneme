module.exports = {
  bot: {
    token: "OTAxOTY3MDc3MDUxNTk2ODMw.YXXkTA.a6Td2uEpzXZr9M80Fo3bRDWh-Z8", //Bot Token from https://discord.com/developers/applications
    prefix: "m+", //Bot Prefix
    owners: ["854376761725550634"], //Bot Onwer ID
    maintenance: false,
    mongourl:
      "mongodb+srv://admin:admin@tnhazem.zfxio.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", //https://mongodb.com/cloud/atlas/register
    invite:
      "https://discord.com/api/oauth2/authorize?client_id=901967077051596830&permissions=8&scope=bot%20applications.commands", //Link Invite Bot
    bot_add_description:
      "You've just added me to **{guild}**.\nThank you for adding me to your server",
    bot_remove_description:
      "You got me out on the **{guild}** server, sorry if there's a mistake on me"
  },
  status: {
    stats: "online", //Status Bot <idle, online, dnd , invisible>
    type: "watching", //Playing Bot <PLAYING, WATCHING , and others>
    name: "testing" //Status Playing
  },//Unfinished Dashboard
  dash: {
    secret: "Jt3VxHS9KspvWkee08p3wjnS3B9CFruk", //SECRET Bot
    id: "901967077051596830", //ID Bot
    url: "https://PREMIUM-DGH-BOT-V3-1.c4tn.repl.co" //Login URL
  },
  server: {
    id: "894222654888890400", //Server ID
    invite: "https://discord.gg/8matjVVsKS" //Server Support
  },
  image: {
    welcome:
      "https://cdn.glitch.com/02e867ae-7c7c-4637-ace7-66ea251fe9d5%2Fwelcome.png?v=1613195262594", //Image WelcomeCard
    leave:
      "https://cdn.glitch.com/02e867ae-7c7c-4637-ace7-66ea251fe9d5%2Fwelcome.png?v=1613195262594", //Image LeaveCard
    level:
      "https://cdn.glitch.com/2337366e-e123-49db-827b-3e28e03e7910%2Fimages.jpeg?1623811398590", //Image LevelCard
    help:
      "https://cdn.discordapp.com/attachments/829696536396955649/856380297851830272/standard_6.gif", //Image Cmd Help.js
    guild_add:
      "https://cdn.discordapp.com/attachments/829696536396955649/856381256379400202/20210621_105311.jpg", //Image Guild Add
    leaderboard:
      "https://i.pinimg.com/736x/d1/00/7b/d1007b46e6175f49f53712f16e4f6a3c.jpg" //Image Leaderboard Card
  },
  mod: {
    muted_defauld: "Muted", // bot will make Roles muted for members who got muted

    //Coming soon auto mod!
    limit_warn: 0, //bot will kick member if it has 3 warns
    limit_muted: 0 //bot will kick member if it has 5 Muted
  },
  logs: {
    boton: "", //Channel ID Bot Online
    botadd: "", //Channel ID Bot Add In Guild
    botdel: "", //Channel ID Bot Remove in Guild
    botlogin: "there is not any yet", //Channel ID User Login
    botreport: ""
  },
  giveaway: {
    default: {
      storage: "./data/giveaways.json",
      default: {
        botsCanWin: false,
        embedColor: "#FF0000",
        embedColorEnd: "#FF0000",
        reaction: "882659092559196190"
      }
    }
  }
};

//Don't Delete This Source Creation!
//Made By Sintya & Fc Glitch
//Owner Sintya
//Developer Fc Glitch & Androz2091
//My Github: Sintya4
//My Developer Github: CODE-GLITCH & Androz2091
//Join My Server: dgh-bot.ddns.net/dc
//Is there a problem with our source? ask us!
//Copyright 2021 © DGH BOT V3
