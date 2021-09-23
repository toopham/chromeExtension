let color = '#FF0000'

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to red', `color: ${color}`)
})

 // "background": {
  //   "service_worker": "background.js"
  // }, 
  // "permissions": ["storage", "activeTab", "scripting"]

  // "action": {
  //   "default_popup": "popup.html", 
  //   "default_icon": {
  //     "16": "/images/couch-16.png",
  //     "32": "/images/couch-32.png",
  //     "48": "/images/couch-48.png",
  //     "128": "/images/couch-128.png"
  //   }
  // },