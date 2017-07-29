angular
    .module('app')
    .controller('HomeController', HomeController);

function HomeController(Upload) {
    var vm = this;

    vm.location;//kh
    vm.field;
    vm.resume;

    console.log(vm.location);
    console.log(vm.field);
    console.log(vm.resume);

    vm.submit = function () {
        console.log(vm.location);
        console.log(vm.field);
        console.log(vm.resume);

        upload();
    };

    function upload() {
        Upload.upload({
            url: '/api/upload',
            data: {file: vm.resume}
        }).then(function (resp) {
            console.log('success!');
            console.log(resp);
        }, function (resp) {
            console.log('fail');
            console.log(resp);
        });
    }
}
