var mobile = false
if(navigator.userAgent.toLowerCase().match(/mobile/i)) {
	document.getElementById("alert").innerHTML = "Welcome to Encrypted Messaging Center!";
	mobile = true
}else{
	document.getElementById("alert").innerHTML = "Welcome to Encrypted Messaging Center!";
}
