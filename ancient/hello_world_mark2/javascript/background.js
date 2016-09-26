chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.executeScript({code:"console.log(chrome)"});
	chrome.tabs.executeScript({file:"javascript/content_script.js"});
	//THE CONTENT SCRIPT LOCATION SHOULD BE WITH RESPECT TO THE manifest.json FILE
});

// function log() {
// 	console.log(1);
// }