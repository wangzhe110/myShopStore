/**
 * Created by lx on 2017/1/4.
 */
/**
 * Created by lx on 2016/12/26.
 */
angular.module('myApp.homeDetail',['ionic']).config(['$stateProvider',function ($stateProvider) {

    $stateProvider.state('tabs.homeDetail',{
        url:'/homeDetail',
        views:{
            'tabs-home':{
                templateUrl:'homeDetail.html',
                controller:'homeDetailController'
            }
        }
    });

}]).controller('homeDetailController',['$scope','HttpFactory',function ($scope,HttpFactory,RongCustomerService) {



}]);