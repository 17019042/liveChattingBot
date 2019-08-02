/*CMD
  command: /adminname
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: please enter ur name
  keyboard: 
  aliases: 
CMD*/

 admin_name= data.message + "";
Bot.setProperty("admin_name", admin_name, "string");
 a_name = Bot.getProperty("admin_name");
Bot.sendInlineKeyboard([ {title: "Name not correct? try again", command: "/adminname" }], "Your name is " + a_name );
