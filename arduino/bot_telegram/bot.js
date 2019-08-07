const TelegramBot = require('node-telegram-bot-api');
var mkr = require('./callProva');

// replace the value below with the Telegram token you receive from @BotFather
const token = '734383558:AAE3lbrrnyJLeSrOVCB_pNIzzNxx7fm8U6I';

const startMessage="Scegliere monitoring system per accedere alla pagina web. Status permette di interagire direttamente con i sensori ";

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

//var chatId; 
 

bot.onText(/\/start/, (msg) => {
  // 'msg' is the received Message from Telegram
  
  chatId = msg.chat.id;

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, startMessage, {
    reply_markup: {
      keyboard: [['monitoring system'], ['sensor']]
    }
  });

});

bot.on('message', (msg) => {
   chatId = msg.chat.id;
  
  var Status = "sensor";

  if (msg.text.toString().toLowerCase().indexOf(Status) === 0) {
      bot.sendMessage(chatId, "Status ritorna i valori di tutti i sensori. Altrimenti premere su un singolo sensore",{
        reply_markup: {
          keyboard: [['status'], ['wifi','temperature'], ['sound','flame'], ['distance','light'] ]
        }
      });
  }

  
  if(msg.text=='status'){

    bot.sendMessage(chatId,'status ok');
  }
  if(msg.text=='wifi'){
    mkr.sendMessageToMkr("getMkr");
    var prova = mkr.getData();
    bot.sendMessage(chatId,prova);
  }
  if(msg.text=='temperature'){
    bot.sendMessage(chatId,'temperature ok');
  }
  if(msg.text=='sound'){
    bot.sendMessage(chatId,'sound ok');
  }
  if(msg.text=='flame'){
    bot.sendMessage(chatId,'flame ok');
  }
  if(msg.text=='distance'){
    bot.sendMessage(chatId,'distance ok');
  }
  if(msg.text=='light'){
    bot.sendMessage(chatId,'light ok');
  }
  });

  



 // module.exports.sendValue = sendValue;
  //module.exports. sendAllert = sendAllert;
  module.exports.bot = bot;
