module.exports = {
  run(client, msg, args, mention, member, reason) {
    if (msg.member.hasPermission("BAN_MEMBERS")) {
      if (mention) {
        if (member) {
          if (reason) {
            member.ban({
              reason: reason,
            });
          } else {
            member.ban({
              reason: "Pas de raison(s) indiquée(s).",
            });
          }
        } else {
          return msg.reply("Cet utilisateur n'est pas présent dans la guilde.");
        }
      } else {
        return msg.reply("Veuillez mentionner un utilisateur.");
      }
    } else {
      return msg.reply(
        "Vous n'êtes pas autorisé à exécuter cette commande."
      );
    }
  },
};
