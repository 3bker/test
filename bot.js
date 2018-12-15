const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "A";

                                   الاقتراحات كود 

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
  let command = message.content.split(" ")[0].slice(prefix.length);
  let args = message.content.split(" ").slice(1);

  if(!message.content.toLowerCase().startsWith(prefix)) return;
  if(command == "suggest") {
    if(!args.join(" ")) return message.reply(`${prefix}suggest <suggestion>`);
    let channel = message.guild.channels.find(c => c.name == "suggestions");
    let embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL)
    .setTitle(`New Suggestion!`)
    .setFooter(message.author.id)
    .setDescription(args.join(" "));
    channel.send(embed).then(msg => {
      msg.react("✅").then(() => msg.react("❌"));
      message.delete()
      message.channel.send(`Success!, your suggestion has been recoded to <#${channel.id}>`);
    });
  }
});







client.on('guildMemberAdd', member=> {
    member.addRole(member.guild.roles.find("name","اسم الرتبه"));
    });


client.login(process.env.BOT_TOKEN);