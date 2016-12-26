/**
 * Created by lx on 2016/12/26.
 */
angular.module('myApp.national',['ionic']).config(['$stateProvider',function ($stateProvider) {

    $stateProvider.state('tabs.national',{
        url:'/national',
        views:{

            'national':{
                   templateUrl:'nationalStore.html',
                   controller:'nationalController'
            }
        }


    });


}]).controller('nationalController',['$state',function ($state) {

}]);