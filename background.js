console.log(data)      
chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete') {

    // do your things

	chrome.tabs.getSelected(null, function (tab) {
		var url = tab.url;
		console.log(url)
	if (url.includes('https://duckduckgo.com/?q=') && !url.includes('site%3Ajare.cloud')){
		chrome.tabs.update(tab.id, {url: url.replace('&t=h_&ia=web','')+data});
	}
	});
	
  }
})
