"use strict"

require('moment')
require('angular-ui-bootstrap')
require('angular-ui-router')
require('angular-local-storage')

require('./routes.js')
require('./modules/drawing')

angular
    .module('codesketcher', [
        'ui.router',
        'ui.bootstrap',
        'angular-loading-bar',
        'LocalStorageModule',
        'codesketcher.routes',
        'codesketcher.drawing'
    ])
    .config(function($urlRouterProvider, cfpLoadingBarProvider) {
        $urlRouterProvider.otherwise('/drawing')
    })
    .controller('AppCtrl', function() {
        
    })