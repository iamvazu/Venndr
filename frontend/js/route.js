angular
    .module('app')
    .config(route);

function route($stateProvider, $urlRouterProvider, $locationProvider) {
    // catch-all
    $urlRouterProvider.otherwise('/home');

    // prettify url
    $locationProvider.html5Mode(true);
    // routes 
    $stateProvider

        // home page
        .state('home', {
            url: '/home',
            templateUrl: 'views/home.html',
            controller: 'HomeController',
            controllerAs: 'main'
        })

        // resume submission page
        .state('seeker', {
            url: '/work',
            templateUrl: 'views/seeker.html',
            controller: 'SeekerController',
            controllerAs: 'seeker'
        })

        // for companies
        .state('company', {
            url: '/hire',
            templateUrl: 'views/company.html',
            controller: 'CompanyController',
            controllerAs: 'company'
        })

};
