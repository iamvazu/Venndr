(function () {
    angular
        .module('app')
        .controller('MatchController', MatchController);

    function MatchController($scope, MainService, PDFService, blockUI, Upload) {
        var vm = this;
        // var pdf = 'img/Resume_June PDF.pdf';
        // var a = PDFService.readPDF();
        // var a = FileService.get('Resume_JunePDF.pdf');
        // var b = PDFService.readPDF('/pdf/Resume_June PDF.pdf');
        vm.onFileSelect = function ($files) {
            if ($files[0].type === 'application/pdf') {
                console.log($files);

                // var a = PDFService.readPDF($files);

                // vm.jobs = MainService.get(a);

                Upload.upload({
                    url: '/api/upload',
                    file: $files
                }).then(function (data) {
                    // file is uploaded successfully
                    console.log(data);
                });
            } else {
                console.log('wrong type');
            }
        };
        blockUI.start();
        // var resume = 'Java Javascript Jquery Swift Python SQL Version Control React Angular Js Apple'
        // var monster = 'Software Engineer Object-Oriented Analysis, Design and Development / Relational Database Systems Innovative software engineer offering four years of experience in the full software development lifecycle – from concept through delivery of next-generation applications and customizable solutions. Expert in advanced development methodologies, tools and processes contributing to the design and rollout of cutting-edge software applications. Known for excellent troubleshooting skills – able to analyze code and engineer well-researched, cost-effective and responsive solutions. Technical Tools Java, JavaScript, .Net, XML, J2EE, HTML, TCP/IP, REST, SOAP, SOA, Visual Studio .Net, Eclipse, SQL, MS SQL Server, MySQL, JUnit, jQuery, C, C++, Tomcat, Spring Framework, Hibernate, Maven, JDeveloper, WebLogic, IIS, Google Web Toolkit and more';

        // var dog = 'Lockheed Martin, Inc. | Fort Worth, TX Software Engineer Intern June 2016 – August 2016 May 2017 – August 2017 First high school intern to ever be hired in Aero IT/EBS. Supporting development and maintenance of enterprise critical applications.  • Developed end-to-end web application (ProCreate) that implements fully automated provisioning for web deployments within Lockheed Martin’s environments. • Designing  web  application  supporting  Product  Process  Verification  (PPV)  success  for the F-35 cost reduction initiative.  • Lead  group  of  four  interns  in  preparing  group  presentation  concerning  the  technical advantages of Amazon Web Services pertaining to Lockheed Martin. • Guest  speaker at  CodeQuest  2017  to  CS  coaches explaining my  responsibilities  and internship opportunities at Lockheed Martin.   • Assistant  in  teaching  elementary  students  Scratch,  ROBOTC,  and  Python  with  Scott Moelling.  Eighteen-Ninety Grille & Lounge | Granbury, TX June 2015 – April 2017 • Dishwasher  (June 2015 – August 2015) • Food Expediter (August 2016 – April 2017)  Java Javascript (jQuery) HTML5 + CSS3 C# Python SQL   North Central Texas Academy October 2015 – May 2017 (Class of 2017)    (817) 894 1570 snoobird February 2017 • Researches trendy memes on user-specified Subreddits and mirrors the most beloved submissions onto its corresponding Twitter account. (@snoobird_bot) sneakyBot April 2017 • Listens for high fashion footwear releases via TwitterStream and immediately purchases shoes for future resell at markup using Selenium.  anthonyavardaro@yahoo.com Granbury, TX github.com/vardaro Lockheed Martin CodeQuest 2016 April 2016 • Awarded 3rd in state among fifty-nine teams, 4th in the country among 290 teams. Earthack at HackDFW 2017 April 2017 • Awarded 1st place for best iOS beginner hack. (Data visualizer for sentiment analysis)  AngularJS Twitter Bootstrap .NET  IntelliJ IDEA Visual Studio (Code) Autodesk Inventor Adobe Photoshop ROBOTC';
        // console.log(dog);

        // vm.jobs = MainService.get(dog);
        // console.log(vm.jobs);

        blockUI.stop();

        // console.log(vm.jobs);

        /**
         * Returns first 40 words of a job description
         */
        vm.getPrettyString = function (jobDesc) {
            var spaces = 0;
            var index = 0;
            for (var i = 0, len = jobDesc.length; i < len; i++) {
                if (spaces >= 40) {
                    index = i;
                    break;
                }
                if (jobDesc.charAt(i) === ' ') {
                    spaces++;
                }
            }
            return jobDesc.substring(0, index) + '...';
        };
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
        };
        // modal skeleton object
        vm.modal = {};
    }
})();
