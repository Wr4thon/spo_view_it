chrome.webRequest.onBeforeRequest.addListener(
    function (info) {
        const removeActionRegex = /(action=.*?(&|$))/i;
        const removeMobileRedirectRegex = /(mobileredirect=.*?(&|$))/i;
        const removeTrailingAmpersandRegex = /&$/;

        let url = info.url.replace(removeActionRegex, "");
        url = url.replace(removeMobileRedirectRegex, "");
        url = url.replace(removeTrailingAmpersandRegex, "");

        url += "&DefaultItemOpen=1&Action=View";

        return { redirectUrl: url };
    },
    {
        urls: [
            "https://*.sharepoint.com/*sourcedoc=*action=*",
            "https://*.sharepoint.com/*d=*"
        ]
    },
    ["blocking"]
);
