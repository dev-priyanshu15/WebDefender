/**
 * Adds a listener to the chrome.webNavigation.onCommitted event to block navigation to specified websites.
 * @param {Object} details - Contains information about the navigation event.
 * @param {string} details.url - The URL of the page to which the navigation is occurring.
 * @param {number} details.tabId - The ID of the tab in which the navigation is occurring.
 * @returns {void} This method does not return a value.
 */
chrome.webNavigation.onCommitted.addListener((details) => {
    chrome.storage.sync.get(["blocklist"], (data) => {
      const blocklist = data.blocklist || [];
      const url = new URL(details.url);
      if (blocklist.includes(url.hostname)) {
        chrome.tabs.update(details.tabId, { url: "blocked.html" });
      }
    });
  });
  