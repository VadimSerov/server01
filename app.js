const but01=document.getElementById("but01");
const t001 = document.getElementById("t001");
const t002 = document.getElementById("t002");
const input = document.getElementById("input");
const send = document.getElementById("send");
var socket = io();
t001.innerHTML = "окно загружено ";
but01.onclick = function(){
	t001.innerHTML = "Жесть от Node JS";
}
send.onclick = function(){
	socket.emit("eventServer",input.value);
}

socket.on("eventClient",function(msg){
	t002.innerHTML += msg.data+"<br>";
	input.value = "";
});
