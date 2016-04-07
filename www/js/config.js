import appTemplate from './app.html!text';

let AppConfig = function($locationProvider, $stateProvider, $urlRouterProvider) {

    // for unmatched url, redirect to top level path
    $urlRouterProvider.otherwise('/app');

    $stateProvider.state('app', {
        url: '/app',
        views: {
            "ionPane": {
                template: appTemplate,
                controller: 'AppController'
            }
        }
    });

    $locationProvider.html5Mode(true);
}

export default AppConfig