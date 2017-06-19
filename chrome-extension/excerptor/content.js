// 这里的脚本可以插入到 浏览器页面中

function sendMessage(message, callback) {
	chrome.extension.sendMessage(message, callback);
}

sendMessage('test',function(res){
	console.log(res);
})

function Menu() {
	this.lastSelected = "";
	var body = document.querySelector('body');

	body.onmouseup = function(e) {
		menu.onmouseup(e);
	}

	body.onscroll = function(e) {
		menu.hideMenu();
	}

	body.onclick = function(e){
		var id = e.target.id;
		switch(id){
			case 'menu-add':
				note.add(this.lastSelected);
				break;
		}
	}.bind(this);

	this.createMenu();
}

Menu.prototype.showMenu = function(x, y) {
	var menu = this.getMenu();
	menu.style.display = "block";
	menu.style.top = y + "px";
	menu.style.left = x + "px";
}

Menu.prototype.hideMenu = function() {
	var menu = this.getMenu();
	menu.style.display = "none";
}

Menu.prototype.createMenu = function() {
	var menu = document.createElement('div');
	menu.id = "menu";
	menu.style.display = "block";
	menu.style.position = "fixed";

	menu.innerHTML = '<div id="menu-add">添加至摘录本</div>';

	document.querySelector('body').appendChild(menu);
}

Menu.prototype.getMenu = function() {
	return document.querySelector('#menu');
}

Menu.prototype.onmouseup = function(e) {

	var selectedText = window.getSelection().toString().trim();
	selectedText ? this.showMenu(e.x, e.y) : this.hideMenu();
	this.lastSelected = selectedText || this.lastSelected;
}

function Note() {
	this.notes = [];

	this.createNote();
}

Note.prototype.createNote = function(x,y) {
	var note  = document.createElement('div');
	note.id = 'note';

	document.querySelector('body').appendChild(note);
}

Note.prototype.getNote = function(){
	return document.querySelector('#note');
}

Note.prototype.add = function(text) {
	this.notes.push(text);
	this.render();
	window.location = "#note-bottom-anchor";
	console.log('当前notes',this.notes);
}

Note.prototype.render = function(){
	var html = '';
	this.notes.forEach(function(note,index){
		html += '<p>' + note + '</p>';
	})

	this.getNote().innerHTML = html;
}


var menu = new Menu();
var note = new Note();
