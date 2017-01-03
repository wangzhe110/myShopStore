/**
 * Created by lx on 2016/12/26.
 */
angular.module('myApp.homeC',['ionic']).config(['$stateProvider',function ($stateProvider) {

    $stateProvider.state('tabs.home',{
        url:'/home',
        views:{
            'tabs-home':{
                templateUrl:'home.html',
                controller:'homeController'
            }
        }
    });

}]).controller('homeController',['$scope','HttpFactory',function ($scope,HttpFactory,RongCustomerService) {




   $scope.home = {
        //搜索
        search:search,
       slideArray:[],
       goodsListArray:[]



   };
     function search() {
          console.log('进行查询');
     }
    var url = "http://114.112.94.166/sunny/wap/api/getGoods";
    HttpFactory.getData(url).then(function (result) {

        for(var i=0;i<result.goodsData.length;i++){
            result.goodsData[i].goods_introduction = "http://114.112.94.166"+result.goodsData[i].goods_introduction

        }

        $scope.home.goodsListArray = result.goodsData;
        console.log( $scope.home.goodsListArray);

    });

}]);