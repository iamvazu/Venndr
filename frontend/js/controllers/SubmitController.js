angular
    .module('app')
    .controller('SubmitController', SubmitController);

function SubmitController($scope, SubmitService, blockUI) {
    var vm = this;
    
    // blockUI var
    blockUI.start();
    vm.jobs = SubmitService.get();
    blockUI.stop();


    console.log(vm.jobs);

    // modal skeleton object
    vm.modal = {};

    /**
     * Returns first 40 words of a job description
     * 
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
    vm.magicModal = function(jobObj) {
        vm.modal = jobObj;
    }
};