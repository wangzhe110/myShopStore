/**
 * Created by lx on 2016/12/26.
 */
angular.module('myApp',['ionic','myApp.tabs','myApp.homeC','myApp.homeDetail','myApp.national','myApp.credit','myApp.personal','myApp.collection','myApp.order','myApp.shopCarHome','myApp.slideBox','myApp.myCredit','myApp.payHistory','myApp.myAddress','myApp.httpFactory','RongWebIMWidget']).config(['$urlRouterProvider',function ($urlRouterProvider) {

    $urlRouterProvider.otherwise('/tabs/home');



}]);