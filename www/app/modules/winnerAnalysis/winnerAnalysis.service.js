import _ from 'lodash';

import magicData from 'app/config/magicData';

class WinnerAnalysisModel {
    constructor() {
        this.adGroups = magicData.adGroups;

        this.defineFunctions();

        this.currentView = this.topView();
    }

    defineFunctions() {
        this.bottomView = (number=5) => {
            let newData = this.adGroups.slice();
            newData.slice().sort((a, b) => {
                if (a.sm < b.sm) return -1;
                if (a.sm > b.sm) return 1;
                return 0;
            });

            return _.take(newData, number);
        }

        this.topView = (number=5) => {
            let newData = this.adGroups.slice();
            newData.sort((a, b) => {
                if (a.sm < b.sm) return 1;
                if (a.sm > b.sm) return -1;
                return 0;
            })

            return _.take(newData, number);
        }

        this.applyTopView = () => this.currentView = this.topView();
        this.applyBottomView = () => this.currentView = this.bottomView();
    }

}

export default WinnerAnalysisModel;