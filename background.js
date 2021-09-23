let color = '#FF0000'

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to red', `color: ${color}`)
})

 // "background": {
  //   "service_worker": "background.js"
  // }, 
  // "permissions": ["storage", "activeTab", "scripting"]