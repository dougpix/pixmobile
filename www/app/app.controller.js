import 'app/app.style.css!css';

let AppController = function($scope, $ionicModal, $ionicSideMenuDelegate, SessionService) {
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

    this.showSideMenu = () => $ionicSideMenuDelegate.toggleLeft();
    this.SessionService = SessionService;
}

export default AppController;