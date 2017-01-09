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


}]).controller('creditController',['$scope',"$ionicTabsDelegate",'HttpFactory',function ($scope,$ionicTabsDelegate,HttpFactory) {



    $scope.$on('$ionicView.beforeEnter',function () {
        $ionicTabsDelegate.showBar(true);
    });

    $scope.credit = {
        //搜索
        search:search,
        slideArray:[],
        goodsListArray:[],
        goToDetail:goToDetail


    };

    function search() {
        console.log('进行查询');
    }
    function goToDetail(index) {
        var  goodsDetail = $scope.home.goodsListArray[index];

        $state.go('tabs.creditDetail',{goodsDetail:goodsDetail.goods_id});
    }
    var url = "http://114.112.94.166/sunny/wap/api/getGoods?integral=1";
    HttpFactory.getData(url).then(function (result) {
        $scope.credit.slideArray = result.bannerData;
        console.log($scope.credit.slideArray);
        for(var i=0;i<result.goodsData.length;i++){
            result.goodsData[i].goods_introduction = "http://114.112.94.166"+result.goodsData[i].goods_introduction

        }

        $scope.credit.goodsListArray = result.goodsData;


    });
}]);