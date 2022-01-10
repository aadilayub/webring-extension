function surf() {
  browser.tabs.update({
    url: 'https://lieu.cblgh.org/random'
  });
}

browser.browserAction.onClicked.addListener(surf);
