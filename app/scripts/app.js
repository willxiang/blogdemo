'use strict';

/**
 * @ngdoc overview
 * @name willxiangApp
 * @description
 * # willxiangApp
 *
 * Main module of the application.
 */
angular
    .module('willxiangApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ui.bootstrap'
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl',
                controllerAs: 'about'
            })
            .when('/contact', {
                templateUrl: 'views/contact.html',
                controller: 'ContactCtrl',
                controllerAs: 'contact'
            })
            .when('/table', {
                templateUrl: 'views/table.html',
                controller: 'TableCtrl',
                controllerAs: 'table'
            })
            .when('/component', {
                templateUrl: 'views/component.html',
                controller: 'ComponentCtrl',
                controllerAs: 'component'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
