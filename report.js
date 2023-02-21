function sortPages(pages) {
    const pagesArr = Object.entries(pages);
    pagesArr.sort((a,b) => {
        return b[1] - a[1];
    })
    return pagesArr;
}

function printReport(pages) {
    console.log('=================================');
    console.log('REPORT');
    console.log('=================================');
    const sortedPages = sortPages(pages);
    for(const page of sortedPages) {
        const url = page[0];
        const count = page[1];
        console.log(`Found ${count} links to page ${url}`);
    }
    console.log('=================================');
    console.log('END OF REPORT');
    console.log('=================================');
}

module.exports = {
    sortPages,
    printReport
}