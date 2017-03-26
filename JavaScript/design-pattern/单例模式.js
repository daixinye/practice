var createDiv = function(html){
	this.html = html;
	this.init();
}

createDiv.prototype.init = function(){
	var div = document.createElement('div');
	div.innerHTML = this.html;
	document.body.appendChild(div);
}

var proxy = (function(){
	//闭包，instance会一直存在在内存当中
	var instance;
	
	return function(html){
		if(!instance){
			instance = new createDiv(html);
		}
		
		return instance;
	}
})()

var a = new proxy("test");
var b = new proxy("test");
var c = new createDiv("aa");

alert(a==b);