/**
 * Created by lx on 2016/12/26.
 */
angular.module('myApp.credit',['ionic']).config(['$stateProvider',function ($stateProvider) {

    $stateProvider.state('tabs.credit',{
        url:'/credit',
        views:{

            'tabs-credit':{
                templateUrl:'creditStore.html',
                controller:'creditController'
            }
        }


    });


}]).controller('creditController',['$state',function ($state) {

}]);