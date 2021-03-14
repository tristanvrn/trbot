const { MessageEmbed } = require("discord.js");

module.exports = {
  run(client, msg, args, mention, member, reason) {
    if (mention) {
      if (member) {
        msg.channel.send(
          new MessageEmbed({
            title: `**${member.user.tag}**'s avatar.`,
            image: member.user.displayAvatarURL({
              format: "png",
              dynamic: true,
              size: 1024,
            }),
            footer: {
              text: msg.author.tag,
              iconURL: msg.author.displayAvatarURL({
                format: "png",
                dynamic: true,
                size: 128,
              }),
            },
          })
        );
      } else {
        return msg.reply("Cet utilisateur n'est pas présent dans la guilde.");
      }
    } else {
      msg.channel.send(
        new MessageEmbed({
          title: `**${msg.author.tag}**'s avatar.`,
          image: msg.author.displayAvatarURL({
            format: "png",
            dynamic: true,
            size: 1024,
          }),
          footer: {
            text: msg.author.tag,
            iconURL: msg.author.displayAvatarURL({
              format: "png",
              dynamic: true,
              size: 128,
            }),
          },
        })
      );
    }
  },
};
