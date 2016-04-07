// Ionic Starter App

//import "ionic/js/dist/js/ionic";
import "lib/ionic/js/ionic.bundle";
import "angular";
import "angular-animate";
import "angular-ui-router";
//import "ionic/js/dist/js/ionic-angular";

import appConfig from './config';
import AppController from './app.controller';
import spiv from 'app/common/spiv/spiv.directive';
import SessionService from 'app/common/session/Session.service.js';

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('pixmobile', ['ionic'])
.controller('AppController', AppController)
.directive('spiv', spiv)
.service('SessionService', SessionService)
.config(appConfig)
.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        if(window.cordova && window.cordova.plugins.Keyboard) {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

            // Don't remove this line unless you know what you are doing. It stops the viewport
            // from snapping when text inputs are focused. Ionic handles this internally for
            // a much nicer keyboard experience.
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if(window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})
