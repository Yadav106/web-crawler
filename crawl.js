const { JSDOM } = require('jsdom');

function getURLsFromHTML(htmlBody, baseURL) {
    const urls = [];
    const dom = new JSDOM(htmlBody);
    const linkElements = dom.window.document.querySelectorAll('a');
    for (const linkElement of linkElements) {
        if(linkElement.href.slice(0, 1) === '/') {
            // relative
            if(baseURL.slice(-1) === '/') {
                try {
                    const url = new URL(`${baseURL.slice(0, -1)}${linkElement.href}`);
                    urls.push(url.href);
                } catch(err) {
                    console.log(`error in relative url : ${err}`);
                }
            } else {
                try {
                    const url = new URL(`${baseURL}${linkElement.href}`);
                    urls.push(url.href);
                } catch(err) {
                    console.log(`error in relative url : ${err}`);
                }
            }
        } else {
            // absolute
            try {
                const url = new URL(linkElement.href);
                urls.push(url.href)
            } catch(err) {
                console.log(`error in absolute url : ${err}`);
            }
        }
    }
    return urls;
}

function normalizeURL(urlString){
    const UrlObj = new URL(urlString);
    const hostPath = `${UrlObj.hostname}${UrlObj.pathname}`;
    if (hostPath.length > 0 && hostPath.slice(-1) === '/') {
        return hostPath.slice(0, -1);
    }
    return hostPath;
}

module.exports = {
    normalizeURL,
    getURLsFromHTML
}