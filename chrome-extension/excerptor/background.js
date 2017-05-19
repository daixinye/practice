var count = 0;

// 监听消息
chrome.extension.onMessage.addListener(onMessage);

function onMessage(request, sender, sendResponse){
	switch(request){
		case 'test':
			sendResponse(count++);
			break;
	}
}


