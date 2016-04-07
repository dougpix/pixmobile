import WinnerAnalysisTemplate from './winnerAnalysis.html!text';

let WinnerAnalysisConfig = function($stateProvider) {

    $stateProvider.state('app.winnerAnalysis', {
        url: 'winneranalysis',
        views: {
            currentPage: {
                template: WinnerAnalysisTemplate,
                controller: 'WinnerAnalysisController',
                controllerAs: 'wa'
            }
        }
    });
}

export default WinnerAnalysisConfig