import demoDefaults from 'app/config/defaultSession';

class SessionService {

    constructor() {
        this._session = {
            account: null,
            accounts: []
        }

        if (true) {
            this.initDemoDefaults();
        }
    }

    initDemoDefaults() {
        this._session = demoDefaults;
    }

    get selectedAccount() {
        return this._session.selectedAccount;
    }

    set selectedAccount(account) {
        this._session.selectedAccount = account;
    }

    get auth_key() {
        return this._session.auth_key;
    }

    get access_group_id() {
        return this._session.access_group_id;
    }

    get account_id_ext() {
        return this._session.account_id_ext;
    }

    get user_id() {
        return this._session.user_id;
    }

    get accounts() {
        return this._session.accounts;
    }

}

export default SessionService;