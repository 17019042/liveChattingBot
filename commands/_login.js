/*CMD
  command: /login
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Please input password.
  keyboard: 
  aliases: 
CMD*/

if(data.message=="admin"){
     Bot.setProperty("admin_chat", data.chat.chatid, "string")
     Bot.sendInlineKeyboard([ {title: "Enter Name", command: "/adminname" }], "You have logged in. Please wait messages from users")
   }else{
     Bot.sendMessage("Access denied. try again");
   }
