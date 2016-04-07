import _ from 'lodash';

class BaseModel {
    constructor(DS, SessionService, config, params, options) {
        "ngInject";

        this.config = config

        this.options = options || { cacheResponse: false };

        this.SessionService = SessionService;

        this._baseQueryParams = {
            access_group_id: this.SessionService.access_group_id,
            account_id_ext: this.SessionService.account_id_ext,
            auth_key: this.SessionService.auth_key,
            page_size: 0
        };

        // for tracking query params changes for current dataset.
        this._defaultQueryParams = _.clone(this._baseQueryParams);
        if(params) {
            this._defaultQueryParams = _.defaults({}, params, this._defaultQueryParams);
        }

        // We create TWO ds resource objects in order to allow in-memory persistence and filtering on BOTH default and previous in parallel.
        this._resource = this.ds.defineResource(this.config);
    }
}

export default BaseModel;