/*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

a_name = Bot.getProperty("admin_name");
Bot.sendInlineKeyboard([{title: "Begin messaging", command: "/message"} ], "Hi, " + a_name + " will be attending to you today.")  

