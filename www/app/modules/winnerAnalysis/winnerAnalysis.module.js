
import WinnerAnalysisConfig from './winnerAnalysis.config.js';
import WinnerAnalysisController from './winnerAnalysis.controller';
import WinnerAnalysisModel from './winnerAnalysis.service.js';

let winnerAnalysis = angular.module('winnerAnalysis', [])
.controller('WinnerAnalysisController', WinnerAnalysisController)
.service('WinnerAnalysisModel', WinnerAnalysisModel)
.config(WinnerAnalysisConfig)

export default winnerAnalysis;
