
import dataStoreConfig from './dataStore.config';

import DataStore from './dataStore.service';

let DataStoreModule = angular.module('dataStore', [])
.service(DataStore, 'DataStore')
.config(dataStoreConfig)

export default DataStoreModule;