const Discord = require("discord.js");
const client = new Discord.Client();
const configs = require("./core/configs");
const ks = require("kaliscripter");
const colors = require("colors");

var cmds = new Discord.Collection();

client.on("ready", () => {
  try {
    require("fs")
      .readdirSync("./commands", "utf-8")
      .forEach((f) => {
        console.log(
          `${colors.green("Section")} : ${colors.magenta(f.toUpperCase())}`
        );
        require("fs")
          .readdirSync(`./commands/${f}`, "utf-8")
          .forEach((_f) => {
            cmds.set(
              _f.slice(0, _f.length - 3),
              require(`./commands/${f}/${_f}`)
            );
            console.log(`↳ ${colors.yellow(_f)}`);
          });
      });
  } catch (err) {
    throw err & process.exit(1);
  } finally {
    console.log("\u200b");
    ks.warn("Toutes les commandes sont chargées !");
  }

  ks.info("KazzCord a été correctement démarré.");
});

client.on("message", (msg) => {
  if (!msg.guild) return false;
  if (msg.author.bot) return false;

  var args = msg.content.split(" ");
  var mention = msg.mentions.users.first();
  var member = msg.guild.member(mention);
  var reason = args.slice(2).join(" ");

  if (
    cmds.get(args[0].slice(1)) != undefined &&
    args[0].startsWith(configs.prefix)
  ) {
    cmds.get(args[0].slice(1)).run(client, msg, args, mention, member, reason);
  } else {
    return msg.reply("Je ne connais pas cette commande.");
  }
});

client.login(configs.token);
