// Main App Module
var app = angular.module('wpxpress', ['MainControllers','ngRoute']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/setup-template', {
        templateUrl: 'html/setup-template.html',
        controller: 'SetupTemplateController'
    })
    .when('/setup-pages', {
        templateUrl: 'html/setup-pages.html',
        controller: 'SetupPagesController'
    })
    .when('/setup-domain', {
        templateUrl: 'html/setup-domain.html',
        controller: 'SetupDomainController'
    })
    .when('/setup-styles', {
        templateUrl: 'html/setup-styles.html',
        controller: 'SetupStylesController'
    })
    .when('/setup-content', {
        templateUrl: 'html/setup-content.html',
        controller: 'SetupContentController'
    })
    .when('/setup-payment', {
        templateUrl: 'html/setup-payment.html',
        controller: 'SetupPaymentController'
    })
    .otherwise({
        redirectTo: '/redirect'
    });
}]);