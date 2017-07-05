angular
    .module('app')
    .controller('MainController', MainController);
    
    function MainController($scope) {
        var vm = this;
        vm.tagline = 'To the moon and back!';
    };
