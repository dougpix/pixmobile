
import WinnerAnalysisConfig from './winnerAnalysis.config';
import WinnerAnalysisController from './winnerAnalysis.controller';
import WinnerAnalysisModel from './winnerAnalysis.service';

import successGraphDirective from './successGraph.directive';

let winnerAnalysis = angular.module('winnerAnalysis', [])
.controller('WinnerAnalysisController', WinnerAnalysisController)
.service('WinnerAnalysisModel', WinnerAnalysisModel)
.directive('successGraph', successGraphDirective)
.config(WinnerAnalysisConfig)

export default winnerAnalysis;
