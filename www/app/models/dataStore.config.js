import configConstants from 'app/config/config';


let DataStoreConfig = function(DSHttpAdapterProvider) {
    DSHttpAdapterProvider.defaults.basePath = configConstants.SERVICES_URL;

    /* default deserializer */
    DSHttpAdapterProvider.defaults.deserialize = function (resource, data) {
        if(data.data instanceof Array){
            _.each(data.data, (itm, idx) => itm["dataIndex"] = idx);
            return data.data;
        }
        else if(data.data['items']){
            _.each(data.data['items'], (itm, idx) => itm["dataIndex"] = idx);
            return data.data['items'];
        }
        else if (data.data['values']) {
            _.each(data.data['values'], (itm, idx) => itm["dataIndex"] = idx);
            return data.data['values'];
        }
        else if (typeof data.data !== 'string') {
            data.data['dataIndex'] = 0;
            return data.data;
        }
        else {
            return data.data;
        }
    };

    let adapterConfig = {
        adapterConfig: { log: false, forceTrailingSlash: true },
        modelConfig: { log: false },
        endpointQueryKeyTypes: {
            NONE: undefined,
            ACCOUNT_ID_EXT: "account_id_ext",
            ACCESS_GROUP_ID: "access_group_id"
        }
    };
    angular.extend(DSHttpAdapterProvider.defaults, adapterConfig);
}

export default DataStoreConfig;