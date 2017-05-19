// 这里的脚本可以插入到 浏览器页面中

document.getElementById('su').addEventListener('click', function(e) {
	e.preventDefault();
	sendMessage('test', function(res){
		console.log(res);
	})
})

function sendMessage(message,callback){
	chrome.extension.sendMessage(message, callback);
}


