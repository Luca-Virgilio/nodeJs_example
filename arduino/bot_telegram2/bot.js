/*install

npm install --save node-telegram-bot-api

*/
const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '658713816:AAGnDQZqStH3svAVNFWLUng9zcyIjwrvLIw';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});
const chatId = 315730764;

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
  
 
  const resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});

bot.onText(/\/start/, (msg) => {

    bot.sendMessage(msg.chat.id, "Welcome, CoOK notify warning transmision", {
        "reply_markup": {
            "keyboard":[["status"],["WebApp"]]
            }
        });
    
    });

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
  

    if(msg.text.toString().toLowerCase() ==="status"){
       text = 'status del sistema: ';
       bot.sendMessage(chatId, text);
    }
    if(msg.text.toString().toLowerCase() ==="webApp"){
        text = 'web app';
        bot.sendMessage(chatId, text);
        
     }
     
    
  });
  module.exports.bot = bot;
  module.exports.chatId = chatId;
 