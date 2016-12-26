/**
 * Created by lx on 2016/12/26.
 */
angular.module('myApp',['ionic','myApp.tabs','myApp.homeC','myApp.national','myApp.credit','myApp.personal']).config(['$urlRouterProvider',function ($urlRouterProvider) {

    $urlRouterProvider.otherwise('/tabs/home');



}]);