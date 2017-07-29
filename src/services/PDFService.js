angular
    .module('app')
    .service('PDFService', PDFService);

function PDFService(PDFJS) {
    var vm = this;

    // reads in pdf and extracts the text
    // PDFJS.getTextContent returns an object kms
    // see vm.concatPDF
    vm.readPDF = function (pdfPath) {
        // get load resume from path
        var loading = PDFJS.getDocument(pdfPath);
        loading.promise.then(function (pdf) {
            // load the first page from pdf
            pdf.getPage(1).then(function (page) {
                // extract text
                page.getTextContent().then(function (textContent) {
                   // console.log(textContent);
                    var val = vm.concatPDF(textContent); // concat the object strs
                   // console.log(val);
                    return (val);
                });
            });
        });
    };

    // PDFJS.getTextContent returns an obj
    // this will concat the strs of each obj in the array
    vm.concatPDF = function (pdfObj) {
        const items = pdfObj.items;
        var goodShit = [];
        for (var i = 0, len = items.length; i < len; i++) {
            // console.log(items[i].str);
            goodShit.push(items[i].str);
        }
        var sane = goodShit.join('');
        // console.log(sane);
        return sane;
    };
}
