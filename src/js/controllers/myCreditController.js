/**
 * Created by lx on 2017/1/4.
 */
angular.module('myApp.myCredit',['ionic']).config(['$stateProvider',function ($stateProvider) {
      $stateProvider.state('tabs.myCredit',{

           url:'/myCredit',
            views:{
               'tabs-personal':{
                   templateUrl:'myCredit.html',
                   controller:'myCreditController'
               }
            }
      })
}]).controller('myCreditController',['$scope',function ($scope) {

                     


}]);