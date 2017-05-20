// 这里的脚本可以插入到 浏览器页面中

function sendMessage(message, callback) {
	chrome.extension.sendMessage(message, callback);
}

var menu = new Menu();
var note = new Note();

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

	return menu;
}

Menu.prototype.getMenu = function() {
	return document.querySelector('#menu') || this.createMenu();
}

Menu.prototype.onmouseup = function(e) {

	var selectedText = window.getSelection().toString().trim();
	selectedText ? this.showMenu(e.x, e.y) : this.hideMenu();
	this.lastSelected = selectedText || this.lastSelected;
}

function Note() {
	this.notes = [];
}

Note.prototype.createNote = function() {

}

Note.prototype.add = function(text) {
	this.notes.push(text);
	console.log('当前notes',this.notes);
}

