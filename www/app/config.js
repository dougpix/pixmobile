import appTemplate from './app.html!text';

let AppConfig = function($locationProvider, $stateProvider, $urlRouterProvider) {

    // for unmatched url, redirect to top level path
    $urlRouterProvider.otherwise('/winnerAnalysis');

    $stateProvider.state('app', {
        url: '/',
        views: {
            "ionPane": {
                template: appTemplate,
                controller: 'AppController',
                controllerAs: 'app'
            }
        }
    });

    $locationProvider.html5Mode(true);
}

export default AppConfig