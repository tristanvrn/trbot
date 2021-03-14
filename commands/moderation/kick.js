module.exports = {
  run(client, msg, args, mention, member, reason) {
    if (msg.member.hasPermission("KICK_MEMBERS")) {
      if (mention) {
        if (member) {
          if (reason) {
            member.kick(reason);
          } else {
            member.kick("Pas de raison(s) spécifiée(s).");
          }
        } else {
          return msg.reply("Cet utilisateur n'est pas présent dans la guilde.");
        }
      } else {
        return msg.reply("Veuillez mentionner un utilisateur.");
      }
    } else {
      return msg.reply(
        "Vous n'avez pas la permission d'exécuter cette commande."
      );
    }
  },
};
