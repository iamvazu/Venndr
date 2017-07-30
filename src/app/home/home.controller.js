angular
    .module('app')
    .controller('HomeController', HomeController);

function HomeController(Upload, $state, blockUI) {
    var vm = this;

    // form models
    vm.info = {
        location: '',
        field: '',
        filename: null
    };

    // upload the resume
    // then goes to the match
    // page and send the vm.info object
    vm.submit = function () {
        blockUI.start();

        // upload the file
        Upload.upload({
            url: 'http://localhost:8080/api/upload',
            data: {file: vm.info.filename}

        }).then(function (resp) {
            console.log('success!');
            console.log(resp);
            // reassign the filename prop in the info obj just as a safety measure
            vm.info.filename = resp.data;

            // send the form data
            $state.go('match', vm.info);
        }, function (resp) {
            console.log(resp);
            blockUI.stop();
        });
    };
}

