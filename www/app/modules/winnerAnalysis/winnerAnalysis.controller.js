
class WinnerAnalysisController {
    constructor($scope, $ionicModal, $ionicSideMenuDelegate, SessionService, $state, WinnerAnalysisModel) {
        this.SessionService = SessionService;
        this.WinnerAnalysisModel = WinnerAnalysisModel;

        this.showSideMenu = () => $ionicSideMenuDelegate.toggleLeft();
        this.dataView = () => this.WinnerAnalysisModel.currentView;

        this.DATA_VIEWS = {
            TOP: 'TOP',
            BOTTOM: 'BOTTOM'
        }
        this.selectedView = this.DATA_VIEWS.TOP;
        this.applyTopView = () => {
            this.selectedView = this.DATA_VIEWS.TOP;
            this.WinnerAnalysisModel.applyTopView();
        }
        this.applyBottomView = () => {
            this.selectedView = this.DATA_VIEWS.BOTTOM;
            this.WinnerAnalysisModel.applyBottomView();
        }

        this.selectedAdGroup = null;
        this.isSelectedAdGroup = (adGroup) => this.selectedAdGroup === adGroup;
        this.showAdGroupDetails = (adGroup) => {
            if (this.isSelectedAdGroup(adGroup)) {
                this.selectedAdGroup = null;
            } else {
                this.selectedAdGroup = adGroup;
            }
        };
    }
}

export default WinnerAnalysisController;