const pdfjs = require('pdfjs-dist');
//var pdfjs = require('pdfjs-dist-for-node')

var fs = require('fs');

module.exports = function (pdfPath) {
    // reads in pdf and extracts the text
    // PDFJS.getTextContent returns an object kms
    // see concatpdf()
    console.log(pdfPath);
    
    var data = new Uint8Array(fs.readFileSync(pdfPath));

    // load resume from path
    console.log(data);

    let loading = PDFJS.getDocument(pdfPath);
    console.log('my god');

    loading.promise.then(function (pdf) {
        // load the first page from pdf
        console.log('hello again!');

        pdf.getPage(1).then(function (page) {
            //extract text
            console.log('hello again again!!');

            page.getTextContent().then(function (textContent) {
                console.log(textContent);
                concatPDF(textContent); //concat the object strs
                //return(textContent);
            });
        });
    }).catch('oops');

}
// PDFJS.getTextContent returns an obj
// this will concat the strs of each obj in the array
function concatPDF(pdfObj) {
    const items = pdfObj.items;
    let goodShit = [];
    for (let i = 0, len = items.length; i < len; i++) {
        // console.log(items[i].str);
        goodShit.push(items[i].str);
    }
    let sane = goodShit.join('');

    console.log(sane);

}