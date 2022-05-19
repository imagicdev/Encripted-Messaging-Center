var mobile = false
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    window.navigate.vibrate([300, 50, 300, 50, 300]);
    alert("Welcome to Encryped Messaging Center mobile!");
	mobile = true
}else{
	alert("Welcome to Encryped Messaging Center);
}
var logoBackground = new Circle(200);
logoBackground.setPosition(getWidth()/2, getHeight()/2);
logoBackground.setColor(Color.orange);
add(logoBackground);
