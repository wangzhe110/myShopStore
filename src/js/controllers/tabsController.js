/**
 * Created by lx on 2016/12/26.
 */
angular.module('myApp.tabs',['ionic']).config(['$stateProvider',function ($stateProvider) {
    $stateProvider.state('tabs',{
            url:'/tabs',
            abstract:true,
            templateUrl:'tabs.html',
            controller:'tabsController'

    });


}]).controller('tabsController',['$state',function ($state) {



}]);