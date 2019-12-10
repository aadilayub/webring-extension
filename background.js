function surf() {
  browser.tabs.update({
    url: "https://webring.xxiivv.com/#random" 
  });
}

browser.browserAction.onClicked.addListener(surf);
