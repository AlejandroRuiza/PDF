const socket = io ();
var pdf = true;
var loadPage = true;
//DOM elements
var btn = document.getElementById('send');


btn.addEventListener('click', function(){
	console.log('click descarga')
	socket.emit('Send-PDF', pdf)
});

