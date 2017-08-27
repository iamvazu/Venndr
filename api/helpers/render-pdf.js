const PDFJS = require('pdfjs-dist');

// get the text
// pdfjs getTextContent() returns an
// array of objects which contains a
// property 'str'
// this will concatenate all the objects
const chain = arr => {
    return arr.map(cur => cur.str).join('');
}
const render = (buffer, success) => {
    PDFJS.getDocument(buffer).then(pdf => {
        pdf.getPage(1).then(page => {
            page.getTextContent().then(txt => {
                let { items } = txt;
                let concat = items.map(cur => cur.str).join('');
                success(concat);
            });
        });
    });
}
module.exports = render;