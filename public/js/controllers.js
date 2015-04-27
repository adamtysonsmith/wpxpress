// Main Controllers loaded into the Main App Module
var main = angular.module('MainControllers', []);

var themes = [
    {
    thumb_img: 'altitude-featured',
    category: '',
    description: '',
    demo_url: ''
    },
    {
    thumb_img: 'parallax-featured',
    category: '',
    description: '',
    demo_url: ''
    },
    {
    thumb_img: 'cafe-featured',
    category: '',
    description: '',
    demo_url: ''
    },
    {
    thumb_img: 'whitespace-featured',
    category: '',
    description: '',
    demo_url: ''
    },
    {
    thumb_img: 'daily-dish',
    category: '',
    description: '',
    demo_url: ''
    },
    {
    thumb_img: 'screenshot-newspro1',
    category: '',
    description: '',
    demo_url: ''
    },
    {
    thumb_img: 'agentpress-pro',
    category: '',
    description: '',
    demo_url: ''
    },
    {
    thumb_img: 'sixteennine-screenshot',
    category: '',
    description: '',
    demo_url: ''
    },
    {
    thumb_img: 'beautiful-screenshot',
    category: '',
    description: '',
    demo_url: ''
    },
    {
    thumb_img: 'agency-screenshot',
    category: '',
    description: '',
    demo_url: ''
    },
    {
    thumb_img: 'metro-screenshot1',
    category: '',
    description: '',
    demo_url: ''
    },
    {
    thumb_img: 'lifestyle-screenshot2',
    category: '',
    description: '',
    demo_url: ''
    },
    {
    thumb_img: 'genesis-21',
    category: '',
    description: '',
    demo_url: ''
    },
    {
    thumb_img: 'eleven40-pro',
    category: '',
    description: '',
    demo_url: ''
    },
    {
    thumb_img: 'centric-pro',
    category: '',
    description: '',
    demo_url: ''
    },
    {
    thumb_img: 'screenshot-magazinepro',
    category: '',
    description: '',
    demo_url: ''
    },
    {
    thumb_img: 'executive-screenshot1',
    category: '',
    description: '',
    demo_url: ''
    },
    {
    thumb_img: 'enterprise-pro-screenshot',
    category: '',
    description: '',
    demo_url: ''
    },
    {
    thumb_img: 'remobile-pro',
    category: '',
    description: '',
    demo_url: ''
    },
    {
    thumb_img: 'minimum-screenshot',
    category: '',
    description: '',
    demo_url: ''
    },
    {
    thumb_img: 'generate-pro',
    category: '',
    description: '',
    demo_url: ''
    },
    {
    thumb_img: 'ambiance-pro',
    category: '',
    description: '',
    demo_url: ''
    },
    {
    thumb_img: 'screenshot-modernportfoliopro',
    category: '',
    description: '',
    demo_url: ''
    },
    {
    thumb_img: 'outreach-screenshot1',
    category: '',
    description: '',
    demo_url: ''
    },
    {
    thumb_img: 'education-pro',
    category: '',
    description: '',
    demo_url: ''
    },
    {
    thumb_img: 'wintersong-screenshot',
    category: '',
    description: '',
    demo_url: ''
    },
    {
    thumb_img: 'screenshot-streamlinepro',
    category: '',
    description: '',
    demo_url: ''
    },
    {
    thumb_img: 'the-411-pro',
    category: '',
    description: '',
    demo_url: ''
    },
    {
    thumb_img: 'focuspro-screenshot',
    category: '',
    description: '',
    demo_url: ''
    },
    {
    thumb_img: 'expose-screenshot',
    category: '',
    description: '',
    demo_url: ''
    },
    {
    thumb_img: 'goinggreen-screenshot',
    category: '',
    description: '',
    demo_url: ''
    },
    {
    thumb_img: 'balance-screenshot',
    category: '',
    description: '',
    demo_url: ''
    },
    {
    thumb_img: 'prose-screenshot',
    category: '',
    description: '',
    demo_url: ''
    },
    {
    thumb_img: 'associate-screenshot',
    category: '',
    description: '',
    demo_url: ''
    },
    {
    thumb_img: 'metric-screenshot1',
    category: '',
    description: '',
    demo_url: ''
    },
    {
    thumb_img: 'crystal-screenshot1',
    category: '',
    description: '',
    demo_url: ''
    },
    {
    thumb_img: 'backcountry-screenshot',
    category: '',
    description: '',
    demo_url: ''
    },
    {
    thumb_img: 'decor-screenshot',
    category: '',
    description: '',
    demo_url: ''
    },
    {
    thumb_img: 'scribble-screenshot',
    category: '',
    description: '',
    demo_url: ''
    },
    {
    thumb_img: 'mindstream-screenshot',
    category: '',
    description: '',
    demo_url: ''
    },
    {
    thumb_img: 'corporate-screenshot',
    category: '',
    description: '',
    demo_url: ''
    },
    {
    thumb_img: 'mocha-screenshot1',
    category: '',
    description: '',
    demo_url: ''
    },
    {
    thumb_img: 'prettypictures-screenshot',
    category: '',
    description: '',
    demo_url: ''
    }
];
    
    
main.controller('SetupTemplateController', ['$scope', function($scope){ 
    $scope.themes = themes;
}]);