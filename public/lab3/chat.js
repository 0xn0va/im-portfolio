var messageArr = [];
var connection = new WebSocket('ws://obscure-waters-98157.herokuapp.com');
function element(id) {
  return document.getElementById(id);
}
function setConnectionStatus(status) {
  var statusMsg = element('connection');
  statusMsg.innerHTML = status;
}
connection.onopen = function() {
  setConnectionStatus('Connected');
};
connection.onerror = function(error) {
  setConnectionStatus('Error');
};
function onKeyPressInput(evt) {
    sendMessage();
}
function sendMessage() {
  var messageParam = element('message');
  connection.send(messageParam.value);
  messageParam.value = '';
}
connection.onmessage = function(e) {
  console.log(e.data);
  var msgContainer = document.createElement('div');
  var msg = document.createTextNode(e.data);
  msgContainer.appendChild(msg);
  messageArr.push(msgContainer);
  renderMessages();
};
function renderMessages() {
  clearChatContent();
  var chatText = element('chat-text');
  messageArr.forEach(function(element) {
    chatText.appendChild(element);
  });
}
function clearChatContent() {
  var chatText = element('chat-text');
  while (chatText.firstChild) {
    chatText.removeChild(chatText.firstChild);
  }
}
