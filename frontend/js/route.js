angular
    .module('app')
    .config(route);

function route($stateProvider, $urlRouterProvider) {

    // routes 
    $stateProvider

        // home page
        .state('home', {
            url: '/home',
            templateUrl: 'views/home.html',
            controller: 'MainController',
            controllerAs: 'main'
        })

        // resume submission page
        .state('submit', {
            url: '/submit',
            templateUrl: 'views/submit.html',
            controller: 'SubmitController',
            controllerAs: 'submit'
        })
        // catch-all
        $urlRouterProvider.otherwise('/home');
};
