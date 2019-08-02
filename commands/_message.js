/*CMD
  command: /message
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Please input message for Mark
  keyboard: 
  aliases: /reply
CMD*/

a_name = Bot.getProperty("admin_name");
Bot.sendMessage("Please input message for " + a_name);

var admin_chat = Bot.getProperty("admin_chat");
if(admin_chat){
  cur_user = "`@" + user.username + "`";
  msg = "Message from: " + cur_user + "\n" + message;
  Bot.setProperty("cur_user_chat", chat.chatid, "string");
  Bot.setProperty("cur_user", cur_user, "string");
  Bot.sendInlineKeyboardToChatWithId(admin_chat,[{title:"Reply", command: "/adminreply"}], msg);

}else{
   Bot.sendMessage("Sorry. An Admin is not around now, please try again later.");
}
