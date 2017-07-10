angular
    .module('app')
    .controller('SeekerController', SeekerController);

function SeekerController($scope, MainService, blockUI) {
    var vm = this;

    // blockUI var
    blockUI.start();
    let resume = 'Java Javascript Jquery Swift Python SQL Version Control React Angular Js Apple'
    let monster = 'Software Engineer Object-Oriented Analysis, Design and Development / Relational Database Systems Innovative software engineer offering four years of experience in the full software development lifecycle – from concept through delivery of next-generation applications and customizable solutions. Expert in advanced development methodologies, tools and processes contributing to the design and rollout of cutting-edge software applications. Known for excellent troubleshooting skills – able to analyze code and engineer well-researched, cost-effective and responsive solutions. Technical Tools Java, JavaScript, .Net, XML, J2EE, HTML, TCP/IP, REST, SOAP, SOA, Visual Studio .Net, Eclipse, SQL, MS SQL Server, MySQL, JUnit, jQuery, C, C++, Tomcat, Spring Framework, Hibernate, Maven, JDeveloper, WebLogic, IIS, Google Web Toolkit and more';

    vm.jobs = MainService.get('/api/worker', monster);
    blockUI.stop();

    console.log(vm.jobs);

    /**
     * Returns first 40 words of a job description
     */
    vm.getPrettyString = function (jobDesc) {
        let spaces = 0;
        let index = 0;
        for (let i = 0, len = jobDesc.length; i < len; i++) {
            if (spaces >= 40) {
                index = i;
                break;
            }
            if (jobDesc.charAt(i) === ' ') spaces++;
        }
        return jobDesc.substring(0, index) + '...';
    }
    /**
     * Used to create a dynamic modal.
     * 
     * called in an ng-click, the current job  obj will
     * be sent here and vm.modal will be assigned to its value.
     * 
     * vm.modal is the object used to build the context menu
     */
    vm.magicModal = function (jobObj) {
        vm.modal = jobObj;
    }
    // modal skeleton object
    vm.modal = {};

    vm.getText = function (pdfUrl) {
        var pdf = PDFJS.getDocument(pdfUrl);
        return pdf.then(function (pdf) { // get all pages text
            var maxPages = pdf.pdfInfo.numPages;
            var countPromises = []; // collecting all page promises
            for (var j = 1; j <= maxPages; j++) {
                var page = pdf.getPage(j);

                var txt = "";
                countPromises.push(page.then(function (page) { // add page promise
                    var textContent = page.getTextContent();
                    return textContent.then(function (text) { // return content promise
                        return text.items.map(function (s) { return s.str; }).join(''); // value page text 

                    });
                }));
            }
            // Wait for all pages and join text
            return Promise.all(countPromises).then(function (texts) {

                return texts.join('');
            });
        });
    }

}