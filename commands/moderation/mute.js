/**
 * @todo Gérer un rôle spécifique permettant de réduire au silence un membre.
 */

module.exports = {
  run(client, msg, args, mention, member, reason) {
    if (msg.member.hasPermission("MUTE_MEMBERS")) {
      if (mention) {
        if (member) {
          // InDev...
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
