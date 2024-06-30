chrome.webNavigation.onCommitted.addListener((details) => {
    chrome.storage.sync.get(["blocklist"], (data) => {
      const blocklist = data.blocklist || [];
      const url = new URL(details.url);
      if (blocklist.includes(url.hostname)) {
        chrome.tabs.update(details.tabId, { url: "blocked.html" });
      }
    });
  });
  