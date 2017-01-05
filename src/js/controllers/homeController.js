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

}]).controller('homeController',['$scope','$state','HttpFactory',function ($scope,$state,HttpFactory) {




   $scope.home = {
        //搜索
        search:search,
       slideArray:[],
       goodsListArray:[],
       goToDetail:goToDetail


   };

     function search() {
          console.log('进行查询');
     }
     function goToDetail() {
            $state.go('tabs.homeDetail')
     }
    var url = "http://114.112.94.166/sunny/wap/api/getGoods";
    HttpFactory.getData(url).then(function (result) {
        $scope.home.slideArray = result.bannerData;
        console.log($scope.home.slideArray);
        for(var i=0;i<result.goodsData.length;i++){
            result.goodsData[i].goods_introduction = "http://114.112.94.166"+result.goodsData[i].goods_introduction

        }

        $scope.home.goodsListArray = result.goodsData;
        console.log( $scope.home.goodsListArray);

    });

}]);