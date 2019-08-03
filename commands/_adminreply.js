/*CMD
  command: /adminreply
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Please input reply for <cur_user>
  keyboard: 
  aliases: 
CMD*/

cur_user_chat = Bot.getProperty("cur_user_chat");
a_name = Bot.getProperty("admin_name");
if(a_name==null){
a_name = "Jamie";
}
msg = a_name + " says: " + "\n" + data.message;
Bot.sendInlineKeyboardToChatWithId(cur_user_chat,[{title:"Reply", command: "/reply"}], msg);

