/////////////////////////////////////////////////Chancla bot codigos//////////////////////////////////////////////
//       __                    __      __           __     ||   Empezado el: 15/07/2020 en tiempos de COVID -19 //
//      | |                    | |     | |         | |     ||   Hecho por: Chanclex'nt#6759                     //
//   ___| |__   ____ ___    ___| | ___ | |__   ___ | |_    ||   Hecho en: Venezuela mi patria querida           //
//  / __| '_ \ / _` | '_ \ / __| |/ _` | '_ \ / _ \| __|   ||   Hecho con: Amor, cariño y mucha dedicación.     //
// | (__| | | | (_| | | | | (__| | (_| | |_) | (_) | |_    ||   Nota: Con algo de inspiración todos podemos     //
//  \___|_| |_|\__,_|_| |_|\___|_|\__,_|_.__/ \___/ \__| __||__ hacer algo importante que lo cambie todo :)     //
///////////////////////////////////////////////////////  \    / //////////////////////////////////////////////////
//                                                        \  /                                                  //
//                                                         \/                                                   //

//Token del bot
const Discord = require('discord.js');
const Canvas = require('canvas');
const client = new Discord.Client({ ws: { intents: 32767 } });
const MessageAttachement = require("discord.js");
const config = require("./config.json");

const colores = {
  hexLiteral: 0xffffff, 
  hexString: 'ffffff',
  number: 16777215,
  RGBArray: [255, 255, 255],
  preDefinidos: [
      'DEFAULT',
      'WHITE',
      'AQUA',
      'GREEN',
      'BLUE',
      'PURPLE',
      'LUMINOUS_VIVID_PINK',
      'GOLD',
      'ORANGE',
      'RED',
      'GREY',
      'DARKER_GREY',
      'NAVY',
      'DARK_AQUA',
      'DARK_GREEN',
      'DARK_BLUE',
      'DARK_PURPLE',
      'DARK_VIVID_PINK',
      'DARK_GOLD',
      'DARK_ORANGE',
      'DARK_RED',
      'DARK_GREY',
      'LIGHT_GREY',
      'DARK_NAVY',
      'RANDOM'
  ]
}
let token = config.token;
client.login(token);

let prefix = config.prefix;

client.on("error", (e) => console.error(e));
client.on("warn", (e) => console.warn(e));
client.on("debug", (e) => console.info(e));

client.on("ready", () => {
  console.log(`Estoy encendido we, 
           conectado en ${client.guilds.cache.size} servidores y  ${client.users.cache.size} usuarios.`);

  const status = [`Comandos, Prefijo c. ¡usa c.comandos y mira todo lo que puedo hacer!`,
                `todo lo que hacen y dicen modo unión soviética`,
                `${client.guilds.cache.size} servidores, que calidad`,
                `Estoy divirtiendo a ${client.users.cache.size} usuarios`
                 ];

		setInterval(() =>{ client.user.setPresence({
      status: "online",
      activity: {
        name: status[Math.floor(Math.random() * status.length)],
        type: "LISTENING"
      }
     }
     )
    }, 10000)
    });

//                              _______
//           __          ______/______|          __        _________________________
//             \         ( (O)  (O)  )          /         |                         |  ____
//              \        (    (-     )         /          | Aquí están los comandos |  |  |
//               \       (  \_____/  )        /           |         del bot         |==|  |
//                \______(____---____)_______/            |                         |  |  |
//                       |  \<(.)>/  |                    |_________________________|  |__|
//                       |  |  .  |UU|                                | |             \    /
//                       |  |  .  |  |                                | |              \  / 
//                       |  |  .  |  |                                | |               \/
//                       |  |  .  |  |                                | | 
//_______________________|__|_____|__|________________________________|_|__________________________________


client.on('message', async message => {
    if(message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
                if(message.content.indexOf(prefix) !== 0) return;
if(command === 'amo'){
  let mencion = message.mentions.users.first();
if(!mencion) return message.reply(`We, no mencionaste a nadie a quien amar, entonces no amas a nadie pinche antisocial`);
  
  
  	const canvas = Canvas.createCanvas(474, 594);
	const ctx = canvas.getContext('2d');
  
  	const background = await Canvas.loadImage('https://cdn.glitch.com/dd6fe819-a327-46a2-b614-7bff1542e30c%2Ftodos%20te%20odian%20pero%20yo%20te%20amo.jpg?v=1600634487598');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  
  	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);
  
  const avatar = await Canvas.loadImage(mencion.displayAvatarURL({ format: 'jpg' }));
	ctx.drawImage(avatar, 148, 223, 139, 139);
//                       x    y
const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'imagen.png');

const embed = new Discord.MessageEmbed()
.setAuthor(message.author.username, message.author.displayAvatarURL())
.addField(`Parece que alguien ama a ${mencion.username}`, `+100 ptos. de autoestima`)
.attachFiles(attachment)
.setImage("attachment://imagen.png")
.setColor('LUMINOUS_VIVID_PINK');

message.channel.send(embed);
}
  if(command === 'ping') {
    let ping = Math.floor(message.client.ping);
    message.channel.send(":ping_pong: Pong!")
    .then(m => {
        
        m.edit(`:incoming_envelope: Ping Mensajes: \`${Math.floor(m.createdTimestamp - Date.now())} ms\`\n:satellite_orbital: Ping DiscordAPI: \`${ping} ms\``);
   }
          )};
  
                  if(message.content.indexOf(prefix) !== 0) return;
 if(command === 'raid'){
    message.channel.send(`**${message.author.username}**` + ' Este comando no existe, soy un bot pacífico, ¿Por qué querrías que raidee?')
    const embed = new Discord.MessageEmbed()
      .setTitle('El baile del trolleo')
       .setImage("https://i.imgur.com/4cuaEoo.gif")
       .setFooter(`XD`)
       .setColor('Blue')
      setTimeout(function()
{message.author.send({ embed })}, 5000);
  };
  });

client.on('message', message => {
    if(message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
            if(message.content.indexOf(prefix) !== 0) return;
if (command === 'piropo') {
  let piropos = ["Me gustaría ser papel para poder envolver ese bombón.", "Eres como wifi sin contraseña, todo el mundo te busca", "Quién fuera bus para andar por las curvas de tu corazón.", "Quiero volar sin alas y salir de este universo, entrar en el tuyo y amarte en silencio.", "Quisiera ser mantequilla para derretirme en tu arepa.", "Si la belleza fuera pecado vos ya estarías en el infierno.", "Me Gustaría Ser Un Gato Para Pasar 7 Vidas A Tu Lado.", "Robar Está Mal Pero Un Beso De Tu Boca Sí Me Lo Robaría.", "Qué Hermoso Es El Cielo Cuando Está Claro Pero Más Hermoso Es El Amor Cuando Te Tengo A Mi Lado.", "Bonita, Camina Por La Sombra, El Sol Derrite Los Chocolates.", "Si Fuera Un Correo Electrónico Serías Mi Contraseña.", "Quisiera que fueses monte para darte machete", "Perdí mi número de teléfono ¿Me das el tuyo?", "¿Cómo te llamas para pedirte de regalo a Santa Claus?", " En el cielo hay muchas estrellas, pero la más brillante está en la Tierra y eres tú.", "¿Acaba de salir el sol o es la sonrisa que me regalas hoy?", "No es el ron ni la cerveza, eres tú quien se me ha subido a la cabeza", "Si hablamos de matemáticas eres la suma de todos mis deseos.", "Pareces Google porque tienes todo lo que yo busco.", "Mi café favorito, es el de tus ojos.", "Quiero ser photoshop para retocarte todo el cuerpo.", "Quisiera que fueras cereal, para cucharearte en las mañanas.", "Quien fuera hambre, para darte tres veces al día."]
  let imagenes = ["https://i.imgur.com/2SYPWoh.jpg", "https://i.imgur.com/VR4SzUY.jpg", "https://i.imgur.com/qEblI2w.jpg"]
            const texto = piropos[Math.floor(Math.random() * piropos.length)]
          const imagen = imagenes[Math.floor(Math.random() * imagenes.length)]
          
          const embed = new Discord.MessageEmbed()
          
      .setTitle('**Conquisto diez chicas a la semana, ¿Quieres un consejo amoroso?**')
      .setAuthor(message.author.username, message.author.displayAvatarURL())
      .addField("*Aquí un piropo para la chica que quieres conquistar 7u7:*", "=======>")
      .addField((texto), ":heart:")
      .setImage(imagen)
      .setColor('PURPLE');

  message.channel.send(embed)
};
  if (command === 'mimir') {
      let mencion = message.mentions.users.first()
      
    let imagenes = ['https://i.imgur.com/smNzUbu.png', 'https://cdn.discordapp.com/attachments/783137895728545832/783741192705540097/124398071_3353324081450865_24009699835441979_o.jpg', 'https://cdn.discordapp.com/attachments/783137895728545832/783741189404622858/images.jpg', 'https://th.bing.com/th/id/OIP.x3UnbXjibS6eYyHjw2mu-AHaGi?pid=Api&rs=1']
    const random = imagenes[Math.floor(Math.random() * imagenes.length)]

    if (!mencion) {
              const embed = new Discord.MessageEmbed()

    .setTitle(`Parece que ${message.author.username} quiere ir a mimir`)
    .addField("Dejémoslo mimir tranquilo", "💤")
    .setImage(random)
    .setColor('#f2f6ff')
    .setFooter('Mimir time');
                message.channel.send(embed);
    } else {
                    const embed = new Discord.MessageEmbed()
    .setTitle(`Parece que ${mencion.username} quiere ir a mimir`)
    .addField("Dejémoslo mimir tranquilo", "💤")
    .setImage(random)
    .setColor('#f2f6ff')
    .setFooter('Mimir time');
      
          message.channel.send(embed);
    }
  };
  
  //Muestra un XD
              if(message.content.indexOf(prefix) !== 0) return;
if (command === 'xd') {
let xd = [
  'https://i.imgur.com/zZqvhol.jpg',
  'https://i.imgur.com/hvRT1V3.jpg',
  'https://i.imgur.com/nzpflQL.jpg',
  'https://i.imgur.com/Z2V1I6n.jpg',
  'https://i.imgur.com/FTlRUsV.jpg',
  'https://i.imgur.com/e8rEtzY.jpg',
  'https://i.imgur.com/CX50XBh.jpg',
  'https://i.imgur.com/RMlkItC.jpg',
  'https://i.imgur.com/0G8Ynz1.jpg',
  'https://i.imgur.com/hT0uRLL.jpg',
  'https://i.imgur.com/bXinUYz.jpg',
  'https://i.imgur.com/4TqPY4S.jpg',
  'https://i.imgur.com/MCTxyyT.jpg',
  'https://i.imgur.com/lLjWIXt.jpg',
  'https://i.imgur.com/Wfzi5vI.jpg',
  'https://i.imgur.com/NUy9K6Z.jpg',
  'https://i.imgur.com/C8qZuOp.jpg',
  'https://i.imgur.com/R4vf8Gd.jpg',
  'https://i.imgur.com/Jm9Evfj.jpg',
  'https://i.imgur.com/I8dStyQ.jpg',
  'https://i.imgur.com/COfMDoZ.jpg']

const random = xd[Math.floor(Math.random() * xd.length)]
const embed = new Discord.MessageEmbed()
  .setTitle('XD')
  .setAuthor(message.author.username)
  .setImage(random)
  .setColor('RED')
  .setTimestamp();
  
  message.channel.send(embed);
};

//monigote
            if(message.content.indexOf(prefix) !== 0) return;
if(command ==='monigote'){

  let array = [`${message.author}`+ " ¡Toma un monigote! || (╯°□°）╯︵ ┻━┻ ||",
    `${message.author}` + " ¡Toma un monigote! || ┬─┬ ノ( ゜-゜ノ) ||",
    `${message.author}` + " ¡Toma un monigote! || ¯\_(ツ)_/¯ ||",
    `${message.author}`+ " ¡Toma un monigote! || (°o°) ||",];
    
  const resultado = array[Math.floor(Math.random() * array.length)]
  
  message.channel.send(resultado);
};
//Cowsay vaca parlante xd
            if(message.content.indexOf(prefix) !== 0) return;
if(command === 'vaca'){
      message.delete();
  const cowsay = require ("cowsay");
  
  let texto = cowsay.think({ 
    text: args.join(' '),      
    eyes: 'oO',    
    T : 'U '   
  })
  const Embed = new Discord.MessageEmbed()

  .setTitle("¡Toma una vaca parlante!.....**La vaca dice:**")
  .setDescription(`\`\`\`\n${texto}\n\`\`\``)
  .setColor('GREEN');
  message.channel.send(Embed)
};
          if(message.content.indexOf(prefix) !== 0) return;
  if(command === 'say'){
    message.delete();
    if(!args) return message.channel.send(`debe escribir un mensaje a enviar.`);
message.channel.send(args.join(" "));
  };
  
//Comando para pregunta
            if(message.content.indexOf(prefix) !== 0) return;
  if (command === 'nostradamus') {
        message.delete();
if (!args) return message.reply(`Escriba una pregunta.`)
    let respuestas = ["XD", "NO", "Tal vez en un año", "Si", "Eso creo", "No estoy seguro we", "No me preguntes esas cosas", "Absolutamente", "Completamente falso", "100% real no fake", "Yo digo que tal vez, pero las estrellas me dicen que NO", "Tal vez", "NUNCA", "JAMÁS", "Lo certifico", "No entendí la pregunta, podrías repetírmela?", "Yo no respondo ese tipo de cosas, pregúntale a tu mamá", "Cierto", "Seguramente si"]

        const resultado = respuestas[Math.floor(Math.random() * respuestas.length)]
        
     const embed = new Discord.MessageEmbed()

      .setTitle('**Parece que tienen una pregunta para mí**', )
      .setAuthor(message.author.username, message.author.displayAvatarURL())
      .addField("**Pregunta:**",  args.join(' '))
      .addField("**Respuesta:**", (resultado))
      .setColor('RED')
     .setTimestamp();
     
      message.channel.send(embed)
    };
  
              if(message.content.indexOf(prefix) !== 0) return;
if(command === 'avatar'){
  let miembro = message.mentions.users.first()

  if (!miembro) {
      const embed = new Discord.MessageEmbed()
          .setImage(`${message.author.displayAvatarURL({size: 2048, dynamic: true})}`)
          .setColor(0x66b3ff)
          .setFooter(`Avatar de ${message.author.tag}`);
      message.channel.send(embed);
  
  } else {
      const embed = new Discord.MessageEmbed()
          .setImage(miembro.displayAvatarURL({size: 2048, dynamic: true}))
          .setColor(0x66b3ff)
          .setFooter(`Avatar de ${miembro.tag}`);
  
      message.channel.send(embed);
  }
  };
  
              if(message.content.indexOf(prefix) !== 0) return;
if(command === 'invite'){
client.generateInvite(["ADMINISTRATOR","MANAGE_CHANNELS","MANAGE_ROLES",
    "MANAGE_MESSAGES","SEND_MESSAGES","CONNECT","BAN_MEMBERS"])
.then(link =>{
  const embed = new Discord.MessageEmbed()
  .setAuthor(message.author.username, message.author.displayAvatarURL())
  .setThumbnail(client.user.displayAvatarURL())
  .addField("**Aquí está mi link de invitación**","LINK: "+ link)
  .setColor('GOLD')
  .setFooter("Chancla Bot, versión 1.0, creado por ! Chancla#9149 y TrollfesT#2552");
    message.channel.send(embed);
          
})
};

//
            if(message.content.indexOf(prefix) !== 0) return;
if(command === 'comandos') {
  var server = message.guild;
  const embed = new Discord.MessageEmbed()

  .setThumbnail(server.iconURL)
  .setAuthor(server.name)
  .setTitle("<:Discord:778804236733513749> Discord")
  .addField("<a:flecha:779126790312296469> *MI PREFIJO:* <a:flecha2:779127569073045535>", '```C. ```')
  .addField("<a:palomitas:778803320210063431>♦️Comandos informativos", "`comandos`, `miserver`, `avatar`, `invite`, `ping`")
  .addField("<a:divertido:778803677238132736>♦️Comandos divertidos", " `mimir`, `monigote`, `vaca + (texto)`, `say + (texto)`,`amo`, `nostradamus + (texto)`, `piropo`, `xd`")
  .addField("<a:admin:778803282457264128>♦️Comandos de admins", "`kick`, `ban`, `raid`, `usuario`")
  .setFooter("Chancla Bot, versión 1.0, creado por ! Chancla#9149 y TrollfesT#2552")
  .setColor(0x66b3ff)
  
  message.channel.send(`${message.author}` + ' Revisa tus mensajes privados we');
message.author.send(embed);

};

  //Comando para banear
            if(message.content.indexOf(prefix) !== 0) return;
if(command === 'ban') {

  let permiso = message.member.hasPermission("BAN_MEMBERS");
  let mencionado = message.mentions.users.first();
  let razon = args.slice(1).join(' ');

if(!mencionado) return message.reply(`We, no mencionaste a nadie, ¿Estás tonto?`);
if(!razon) return message.channel.send(`No puedes banear a alguien sin razón :V`);
if(!permiso){
  message.channel.send('No tienes el permiso de banear');
} else{
  message.channel.send('Si tienes el permiso de banear');
}

message.guild.member(mencionado).ban(razon);
message.channel.send(`**${mencionado.username}**, le metieron un martillazo y lo exiliaron, razón: ${razon}.`);

};


            if(message.content.indexOf(prefix) !== 0) return;
if(command === 'kick') {

  let permiso = message.member.hasPermission("KICK_MEMBERS");
  let mencionado = message.mentions.users.first();
  let razon = args.slice(1).join(' ');

if(!mencionado) return message.reply(`We, no mencionaste a nadie, ¿Estás tonto?`);
if(!razon) return message.channel.send(`No puedes kickear a alguien sin razón :V`);
if(!permiso){
  message.channel.send('No tiene el permiso de kickear');
} else{
  message.channel.send('Si tiene el permiso de Kickear');
}

message.guild.member(mencionado).kick(razon);
message.channel.send(`**${mencionado.username}**, le metieron una patada y lo mandaron a otro mundo, razón: ${razon}.`);

};
//Datos de usuario
              if(message.content.indexOf(prefix) !== 0) return;
if(command === 'usuario') {
        let mencion = message.mentions.users.first()

        if (!mencion){
                var user = message.author;
  const embed = new Discord.MessageEmbed()
.setThumbnail(user.AvatarURL())
.setAuthor(user.username+'#'+user.discriminator, )
.addField('ID del usuario', user.id, true)
.addField('Region', user.region, true)
.addField('Cuenta creada en la fecha:', user.joinedAt.toDateString(), true)
.setFooter("Chancla Bot, versión 1.0, creado por ! Chancla#9149 y TrollfesT#2552")
.setColor(0x66b3ff);

      message.channel.send(embed);
} else {
const embed = new Discord.MessageEmbed()
.setThumbnail(message.author.displayAvatarURL())
.setAuthor(mencion.username)
.addField('ID del usuario', mencion.id, true)
.addField('Region', mencion.region, true)
.addField('Creado el', mencion.joinedAt.toDateString(), true)
.setFooter("Chancla Bot, versión 1.0, creado por ! Chancla#9149 y TrollfesT#2552")
.setColor(0x66b3ff);

message.channel.send(embed);
}
};
  
//Datos del servidor
            if(message.content.indexOf(prefix) !== 0) return;
if(command === 'miserver') {
var server = message.guild;
  
const embed = new Discord.MessageEmbed()
.setThumbnail(server.iconURL())
.setAuthor(server.name, server.iconURL())
.addField('ID del server', server.id, true)
.addField('Region', server.region, true)
.addField('Creado el', server.joinedAt.toDateString(), true)
.addField('Dueño del Servidor', server.owner.user.tag, true)
.addField('Miembros', server.memberCount, true)
.setFooter("Chancla Bot, versión 1.0, creado por ! Chancla#9149 y TrollfesT#2552")
.setColor(0x66b3ff);

message.channel.send(embed);
}
});
