function normalizeURL(urlString){
    const UrlObj = new URL(urlString);
    const hostPath = `${UrlObj.hostname}${UrlObj.pathname}`;
    if (hostPath.length > 0 && hostPath.slice(-1) === '/') {
        return hostPath.slice(0, -1);
    }
    return hostPath;
}

module.exports = {
    normalizeURL
}