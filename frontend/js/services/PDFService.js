angular
    .module('app')
    .factory('PDFService', PDFService);


function PDFService($window) {
    return $window.pdf;
};