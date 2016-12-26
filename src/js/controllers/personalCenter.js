/**
 * Created by lx on 2016/12/26.
 */
angular.module('myApp.personal',['ionic']).config(['$stateProvider',function ($stateProvider) {

    $stateProvider.state('tabs.personal',{
        url:'/personal',
        views:{

            'personal':{
                templateUrl:'personalCenter.html',
                controller:'personalController'
            }
        }


    });


}]).controller('personalController',['$state',function ($state) {

}]);