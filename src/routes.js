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
      templateUrl: 'app/home/home.html',
      controller: 'HomeController',
      controllerAs: 'home'
    })

    // resume submission page
    .state('match', {
      url: '/match',
      templateUrl: 'app/match/match.html',
      controller: 'MatchController',
      controllerAs: 'MatchController',
      params: {
        location: null,
        field: null,
        filename: null
      }
    });

  // // for companies
  // .state('hire', {
  //     url: '/hire',
  //     templateUrl: 'src/company/company.html',
  //     controller: 'CompanyController',
  //     controllerAs: 'company'
  // }
}
