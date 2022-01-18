chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        return {
            cancel: true
        }
    },
    {
        urls: [
            "*://*.zedo.com/*",
            "*://*.googlesyndication.com/*",
            "*://creative.ak.fbcdn.net/*",
            "*://*.adbrite.com/*",
            "*://*.exponential.com/*",
            "*://*.quantserve.com/*",
            "*://*.scorecardresearch.com/*",
        ]
    },
    ["blocking"]
)




