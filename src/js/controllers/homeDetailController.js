/**
 * Created by lx on 2017/1/4.
 */
/**
 * Created by lx on 2016/12/26.
 */
angular.module('myApp.homeDetail',['ionic']).config(['$stateProvider',function ($stateProvider) {

    $stateProvider.state('tabs.homeDetail',{
        url:'/homeDetail',
        params:{'goodsDetail':'发生未知错误'},
        views:{
            'tabs-home':{
                templateUrl:'homeDetail.html',
                controller:'homeDetailController'
            }
        }
    });

}]).controller('homeDetailController',['$scope','$state','$stateParams','$ionicTabsDelegate','HttpFactory','$ionicModal',function ($scope,$state,$stateParams,$ionicTabsDelegate,HttpFactory,$ionicModal) {
   $scope.homeDetail={
       //轮播图
       slideArray:[],
       collect:collect,
       selected:true,
       showShopCarModal:showShopCarModal,
       navDetailName:'商品详情',
       //进入商品详情页面
       showGoodsDetail:showGoodsDetail,
       //进入商品参数页面
       showGoodsArgument:showGoodsArgument,
       //进入评价页面
       showGoodsJudge:showGoodsJudge,
       //回到首页
       goToHomePager:goToHomePager,
       goToShopCarHome:goToShopCarHome
   };


    $scope.$on('$ionicView.beforeEnter',function () {
        $ionicTabsDelegate.showBar(false);
    });

    console.log($stateParams.goodsDetail);
    (function () {
        var params = {
            id: $stateParams.goodsDetail
        };
        console.log(params);
        var url ='http://114.112.94.166/sunny/wap/api/getGoods';
        HttpFactory.getData(url,params).then(function (result) {
            console.log(result);
            //轮播图ds
            // $scope.homeDetail.slideArray=result.bannerData;
            // $scope.homeDetail.goodsName=result.bannerData;

        }).then(function (err) {
            console.log(err);
        });

    }());






    //点击星星 让物品收藏
    function collect(e) {
        $scope.homeDetailselected =!$scope.homeDetailselected;
        var testDiv = angular.element(e.currentTarget);
        var changeSpan = angular.element(testDiv.children()[0]);
        if($scope.homeDetailselected){
            changeSpan.removeClass('homeDetail_titleRightIon').addClass('homeDetail_titleRightIonChanged')
        }else{
            changeSpan.removeClass  ('homeDetail_titleRightIonChanged').addClass('homeDetail_titleRightIon')
        }

    }

    //进入商品详情页面
    function showGoodsDetail(e) {
        $scope.homeDetail.navDetailName='商品详情';
        var targetDiv = angular.element(e.currentTarget).children();
        goodetailPagerStyle();
        targetDiv.css({'border-bottom':'.1rem solid #e80516','color':'#e80516'});


    }

    //进入商品参数页面
    function showGoodsArgument(e) {
        $scope.homeDetail.navDetailName='商品参数';
        var targetDiv = angular.element(e.currentTarget).children();
        goodetailPagerStyle();
        targetDiv.css({'border-bottom':'.1rem solid #e80516','color':'#e80516'});
    }

    //进入 评价页面
    function showGoodsJudge(e) {
        $scope.homeDetail.navDetailName='评价';
        var targetDiv = angular.element(e.currentTarget).children();
        goodetailPagerStyle();
        targetDiv.css({'border-bottom':'.1rem solid #e80516','color':'#e80516'});
    }

    //商品介绍 所有的style初始化
    function goodetailPagerStyle (){
        var parentDiv = angular.element(document.getElementsByClassName('homeDetail_goodsNav'));
        var  eachDiv = parentDiv.children();
        for(var i =0;i<eachDiv.length;i++){
            var targetDiv = angular.element(eachDiv[i]).children();
            targetDiv.css({'border-bottom':'.1rem solid transparent','color':'#666'});

        }

    }

    function goToHomePager() {
        $state.go('tabs.home');

    }
    function goToShopCarHome() {
        $state.go('tabs.shopCarHome');
        console.log('进入购物车页面');
    }

//    点击数量弹出窗口
    function showShopCarModal() {
        console.log('弹出购物车模态窗口');
        showShopCar();
        // $scope.modal.show();
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


    function showShopCar() {
        $scope.modal.show();
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