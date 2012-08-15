// Limited by the permissions manifest
var requestFilter = { urls: ["<all_urls>"] };

chrome.webRequest.onBeforeSendHeaders.addListener(
  function(details) {
    var headers = details.requestHeaders,
        USER_AGENT = [ // Chrome 20 for OS X
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8)",
          "AppleWebKit/536.11 (KHTML, like Gecko)",
          "Chrome/20.0.1132.43 Safari/536.11"
        ].join(' ');

    for (var i = 0, name; name = headers[i].name; i++) {
      if (name == 'User-Agent') {
        headers[i].value = USER_AGENT;
        break;
      }
    }

    return { requestHeaders: headers };

}, requestFilter, ["blocking", "requestHeaders"]);
