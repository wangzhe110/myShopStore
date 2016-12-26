/**
 * Created by lx on 2016/12/26.
 */
angular.module('myApp',['ionic','myApp.tabs','myApp.homeC','myApp.national','myApp.credit','myApp.personal']).config(['$urlRouterProvider',function ($urlRouterProvider) {

    $urlRouterProvider.otherwise('/tabs/home');



}]);
/**
 * Created by lx on 2016/12/26.
 */
angular.module('myApp.credit',['ionic']).config(['$stateProvider',function ($stateProvider) {

    $stateProvider.state('tabs.credit',{
        url:'/credit',
        views:{

            'credit':{
                templateUrl:'creditStore.html',
                controller:'creditController'
            }
        }


    });


}]).controller('creditController',['$state',function ($state) {

}]);
/**
 * Created by lx on 2016/12/26.
 */
angular.module('myApp.homeC',['ionic']).config(['$stateProvider',function ($stateProvider) {

    $stateProvider.state('tabs.home',{
        url:'/home',
        views:{
            'home':{
                templateUrl:'home.html',
                controller:'homeController'
            }
        }
    });

}]).controller('homeController',['$state',function ($state) {



}]);
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