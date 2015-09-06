cwindow.alert('call content script working');

chrome.tabs.query({"active":true},function(tabs) {
	window.alert(tabs[0].id);
	chrome.tabs.executeScript({code:"window.alert('hmmm')"});
	//REQUIRES "permissions" : "activeTab"
	window.alert('exiting chrome');
});

window.alert('exiting call_content_script');