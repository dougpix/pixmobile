import 'app/app.style.css!css';

let AppController = function($scope, $ionicModal, $ionicSideMenuDelegate, SessionService, $state) {

    /* ignore this */
    $scope.modalContent = "Some test modal content";
    var testModal = `
        <ion-modal-view>
            <ion-header-bar>
                <h1 class="title">My Modal title</h1>
            </ion-header-bar>
            <ion-content>
                <span ng-bind="modalContent"></span>
            </ion-content>
        </ion-modal-view>
    `;
    var modal = $ionicModal.fromTemplate(testModal, { scope: $scope });
    $scope.showModal = function() { modal.show(); };



    this.SessionService = SessionService;

    const MENU_STATES = {
        ACCOUNT_SWITCHER: 'ACCOUNT_SWITCHER',
        NAVIGATION: 'NAVIGATION'
    }
    this.menuState = MENU_STATES.NAVIGATION;

    this.showNav = () => {
        this.menuState = MENU_STATES.NAVIGATION;
        $ionicSideMenuDelegate.toggleLeft();
    }
    this.showAccountSwitcher = () => {
        this.menuState = MENU_STATES.ACCOUNT_SWITCHER;
        $ionicSideMenuDelegate.toggleLeft();
    }

    this.switchToAccount = (account) => {
        this.SessionService.selectedAccount = account;
        $ionicSideMenuDelegate.toggleLeft();
    }

    this.isAccountSwitcher = () => this.menuState === MENU_STATES.ACCOUNT_SWITCHER;
    this.isNavMode = () => this.menuState === MENU_STATES.NAVIGATION;

    $state.go('app.winnerAnalysis');
}

export default AppController;