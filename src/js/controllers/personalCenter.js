/**
 * Created by lx on 2016/12/26.
 */
angular.module('myApp.personal',['ionic']).config(['$stateProvider',function ($stateProvider) {

    $stateProvider.state('tabs.personal',{
        url:'/personal',
        views:{

            'tabs-personal':{
                templateUrl:'personalCenter.html',
                controller:'personalController'
            }
        }


    });


}]).controller('personalController',['$scope','$ionicTabsDelegate','$state','$ionicViewSwitcher',function ($scope,$ionicTabsDelegate,$state,$ionicViewSwitcher) {
    $scope.$on('$ionicView.beforeEnter',function () {
        $ionicTabsDelegate.showBar(true);
    });
    $scope.personal = {

        userName:'你还想我吗？',
        creditNum:'3800',
        //进入订单
        showOrder:showOrder,
        //进入收藏
        showCollect:showCollect,
        //进入购物车
        showShoppingCar:showShoppingCar,
        //进入积分页面
        showCredit:showCredit,
        //进入收货地址页面
        showAddress:showAddress,
        //进入支付记录页面
        showPay:showPay,
        //进入关注页面
        showAttention:showAttention

    };

    function showOrder() {
        $state.go('tabs.order');
        console.log('进入我的订单页面');

    }
    function showCollect() {
        console.log('进入我的收藏页面');
        $state.go('tabs.collectionPager');

    }
    function showCredit() {
        console.log('进入我的积分页面');
        $state.go('tabs.myCredit');

    }
    function showShoppingCar() {
        console.log('进入购物车页面');
        $state.go('tabs.shopCarHome');

    }
    function showAddress() {
        console.log('进入收货地址页面');
        $state.go('tabs.myAddress');
    }

    function showPay() {
        console.log('进入我的支付记录页面');
        $state.go('tabs.payHistory');
    }
    function showAttention() {
        console.log('进入关注页面');
    }
}]);