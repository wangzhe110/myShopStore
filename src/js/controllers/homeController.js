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

}]).controller('homeController',['$scope','$state','$ionicTabsDelegate','HttpFactory','$ionicModal',function ($scope,$state,$ionicTabsDelegate,HttpFactory,$ionicModal) {


    $scope.$on('$ionicView.beforeEnter',function () {
        $ionicTabsDelegate.showBar(true);
    });

   $scope.home = {
        //搜索
        search:search,
       slideArray:[],
       goodsListArray:[],
       goToDetail:goToDetail,
       showshopCarModal:showshopCarModal


   };

     function search() {
          console.log('进行查询');
     }
     function goToDetail(index) {

             var  goodsDetail = $scope.home.goodsListArray[index];

             $state.go('tabs.homeDetail',{goodsDetail:goodsDetail.goods_id});
     }
    var url = "http://114.112.94.166/sunny/wap/api/getGoods";
    HttpFactory.getData(url).then(function (result) {
        $scope.home.slideArray = result.bannerData;
        console.log($scope.home.slideArray);
        for(var i=0;i<result.goodsData.length;i++){
            result.goodsData[i].goods_introduction = "http://114.112.94.166"+result.goodsData[i].goods_introduction

        }

        $scope.home.goodsListArray = result.goodsData;


    });

     function showshopCarModal() {
        $scope.modal.show();

    }
    //  购物车模态窗口
    function reduce() {
        if($scope.collect.val>1){
            $scope.collect.val--;
        }
        //让最少为一件
    }
    function  add () {
        $scope.collect.val ++;
    }





    //加入购物车的模态窗口
    $ionicModal.fromTemplateUrl('shopCar_Modal.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.modal = modal;
    });


    //当我们用到模型时，清除它！
    $scope.$on('$destroy', function() {
        $scope.modal.remove();
    });



}]);