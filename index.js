var mobile = false
if(navigator.userAgent.toLowerCase().match(/mobile/i)) {
	window.navigate.vibrate([300, 50, 300, 50, 300]);
	alert("Welcome to Encryped Messaging Center mobile!");
	mobile = true
}else{
	alert("Welcome to Encryped Messaging Center);
}
