(function () {
    angular
        .module('app')
        .controller('MatchController', MatchController);

    function MatchController($scope, MatchService, PDFService, blockUI, Upload, $stateParams) {
        var vm = this;

        blockUI.start();
        console.log($stateParams);
        let curPDF = $stateParams.filename;
        var pdf = PDFService.readPDF('http://localhost:8080/pdf/' + curPDF);
        console.log(pdf);
        vm.jobs = {};

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
