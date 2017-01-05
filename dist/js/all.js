/**
 * Created by lx on 2016/12/26.
 */
angular.module('myApp',['ionic','myApp.tabs','myApp.homeC','myApp.homeDetail','myApp.national','myApp.credit','myApp.personal','myApp.collection','myApp.order','myApp.shopCarHome','myApp.slideBox','myApp.myCredit','myApp.payHistory','myApp.myAddress','myApp.httpFactory','RongWebIMWidget']).config(['$urlRouterProvider',function ($urlRouterProvider) {

    $urlRouterProvider.otherwise('/tabs/home');



}]);
/**
 * Created by lx on 2016/12/9.
 */
angular.module('myApp.collection',[]).config(['$stateProvider',function ($stateProvider) {
    $stateProvider.state('tabs.collectionPager',{
        url:'/collectionPager',
        views:{
            'tabs-personal': {
                templateUrl: 'collectionPager.html',
                controller: "collectionPagerController"
            }
        }

      });
}]).controller('collectionPagerController',['$scope',"$ionicTabsDelegate",'$ionicModal','$ionicPopup',function ($scope,$ionicTabsDelegate,$ionicModal,$ionicPopup) {

    $scope.$on('$ionicView.beforeEnter',function () {
        $ionicTabsDelegate.showBar(false);
    });
    $scope.collect = {
        //删除商品
        delete:deleteItem,
        //商品 名称 显示 按钮 名字普通商品 和 积分商品
        goods_name:'普通商品',
        //商品名称
        goods_title:'买一份送一份日王阳澄湖大闸蟹全母螃蟹3.2-3.0两6只鲜活现货礼盒装',
        //商品价格
        goods_price:'￥300',
        //收藏商品的数量
        goods_num:'x1',
        //商品数组
        goodsNumArray:[1,2,3],
        //膜态 窗口里面的
        showShopCar:showShopCar,
        //商品价格
        money :128,
        //用户点击商品购买的数量
        val : 1,
        // 库存
        count :800,

        //减少商品数量
        reduce:reduce,
        //增加商品数量
        add:add



    };


    function deleteItem(index) {

            //弹出弹框
            $ionicPopup.show({
                cssClass:'myOrder',
                template:'确认要删除吗？',
                buttons:[{
                    text:'取消',
                    onTap:function () {

                    }
                },{
                    text:'确定',
                    onTap:function () {
                        $scope.collect.goodsNumArray.splice(index,1);
                    }
                }]

            });

        }

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
/**
 * Created by lx on 2017/1/4.
 */
/**
 * Created by lx on 2016/12/26.
 */
angular.module('myApp.homeDetail',['ionic']).config(['$stateProvider',function ($stateProvider) {

    $stateProvider.state('tabs.homeDetail',{
        url:'/homeDetail',
        views:{
            'tabs-home':{
                templateUrl:'homeDetail.html',
                controller:'homeDetailController'
            }
        }
    });

}]).controller('homeDetailController',['$scope','HttpFactory',function ($scope,HttpFactory,RongCustomerService) {



}]);

/**
 * Created by lx on 2017/1/4.
 */
angular.module('myApp.myAddress',['ionic']).config(['$stateProvider',function ($stateProvider) {
    $stateProvider.state('tabs.myAddress',{

        url:'/myAddress',
        views:{
            'tabs-personal':{
                templateUrl:'myAddress.html',
                controller:'myAddressController'
            }
        }
    })
}]).controller('myAddressController',['$scope','$ionicTabsDelegate',function ($scope,$ionicTabsDelegate) {

    $scope.$on('$ionicView.beforeEnter',function () {
        $ionicTabsDelegate.showBar(false);
    });
        $scope.address ={
            changeIconGray:changeIconGray,
            changeIconRed:changeIconRed,
           tubiao:'未选中'
        };

       function changeIconGray(e) {
           $scope.address.tubiao = '选中';

           }
      function changeIconRed(e) {

          $scope.address.tubiao = '未选中';

        }




}]);
/**
 * Created by lx on 2017/1/4.
 */
angular.module('myApp.myCredit',['ionic']).config(['$stateProvider',function ($stateProvider) {
      $stateProvider.state('tabs.myCredit',{

           url:'/myCredit',
            views:{
               'tabs-personal':{
                   templateUrl:'myCredit.html',
                   controller:'myCreditController'
               }
            }
      })
}]).controller('myCreditController',['$scope',function ($scope) {

                     


}]);
/**
 * Created by lx on 2016/12/26.
 */
angular.module('myApp.national',['ionic']).config(['$stateProvider',function ($stateProvider) {

    $stateProvider.state('tabs.national',{
        url:'/national',
        views:{

            'tabs-national':{
                   templateUrl:'nationalStore.html',
                   controller:'nationalController'
            }
        }


    });


}]).controller('nationalController',['$state',function ($state) {

}]);
/**
 * Created by lx on 2016/12/28.
 */
angular.module('myApp.order',[]).config(['$stateProvider',function ($stateProvider) {

       $stateProvider.state('tabs.order',{

             url:'/order',
           views:{
               'tabs-personal':{

                   templateUrl:'orderHome.html',
                   controller:'orderController'
               }
           }

       })


}]).controller('orderController',['$scope','$ionicTabsDelegate',function ($scope,$ionicTabsDelegate) {

    $scope.$on('$ionicView.beforeEnter',function () {
    $ionicTabsDelegate.showBar(false);
    });
     $scope.order ={
          goodsClass:'待付款'
      }


}]);
/**
 * Created by lx on 2017/1/4.
 */
/**
 * Created by lx on 2016/12/28.
 */
angular.module('myApp.payHistory',[]).config(['$stateProvider',function ($stateProvider) {

    $stateProvider.state('tabs.payHistory',{

        url:'/payHistory',
        views:{
            'tabs-personal':{

                templateUrl:'payHistory.html',
                controller:'payHistoryController'
            }
        }

    })


}]).controller('payHistoryController',['$scope','$ionicTabsDelegate',function ($scope,$ionicTabsDelegate) {

    $scope.$on('$ionicView.beforeEnter',function () {
        $ionicTabsDelegate.showBar(false);
    });



}]);
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
/**
 * Created by lx on 2016/12/29.
 */
angular.module('myApp.shopCarHome',['ionic']).config(['$stateProvider',function ($stateProvider) {

    $stateProvider.state('tabs.shopCarHome',{
        url:'/shopCarHome',
        views:{
            'tabs-personal':{
                templateUrl:'shoppingCarHome.html',
                controller:'shopCarHomeController'
            }
        }
    })

}]).controller('shopCarHomeController',['$scope','$ionicTabsDelegate',function ($scope,$ionicTabsDelegate) {
    $scope.$on('$ionicView.beforeEnter',function () {
        $ionicTabsDelegate.showBar(false);
    });
       $scope.shopCarHome = {
           hasClass:'全部',
           hasClassOne:'选中',
           changeState:changeState,
           changeStateOne:changeStateOne
       };
      function changeState() {
          if($scope.shopCarHome.hasClass=='全部'){
              $scope.shopCarHome.hasClass='';
          }else{
              $scope.shopCarHome.hasClass='全部';
          }

      }
    function changeStateOne() {

        if ($scope.shopCarHome.hasClassOne == '选中') {
            $scope.shopCarHome.hasClassOne = '';
            console.log('取消选中')
            $scope.shopCarHome.hasClass='';
        } else {
            $scope.shopCarHome.hasClassOne = '选中';
            console.log('选中')
        }
    }
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


}]).controller('tabsController',['$scope','$ionicSideMenuDelegate','RongCustomerService','$ionicGesture',function ($scope,$ionicSideMenuDelegate,RongCustomerService,$ionicGesture) {
        //切换侧边栏
        $scope.toggleLeft = function() {
            $ionicSideMenuDelegate.$getByHandle('sideContent').toggleRight(true);
            console.log('切换侧边栏')
        };


        // $scope.tabs = {
        //     serviceDrag:serviceDrag,
        //     serviceTouch:serviceTouch
        // };
    RongCustomerService.init({
        appkey:"qd46yzrfqdivf",
        token:"I7nOrHq+IgKOsOvytqrpRRcFT+3efc1/pVJK425QU4Ma318KoCDsdZA+jgc+1+8yW0KYYBC+TCvAMgNXWsLgkg==",
        customerServiceId:"KEFU148292389311963",
        position:RongCustomerService.Position.right,
        reminder:" ",
        positionFixed:true,

        style:{
            width:window.screen.width,
            height:window.screen.height

        },
        onSuccess:function(){

            //初始化完成
            //设置客服按钮位置
            var kf = angular.element(document.getElementById('rong-widget-minbtn'));
            kf.css('bottom','80px');
            kf.css('right','20px');
            var rongSendBtn = angular.element(document.getElementById('rong-sendBtn'));
            rongSendBtn.css('backgroundColor','#E60012');
            kf.on('click',function () {
                // $state.reload();
                // $scope.openModal();
                // $state.go('rykf');
                // console.log(indexRY);
                // indexRY.style.position = 'absolute';
                // indexRY.style.height = '800px';
                // indexRY.style.width = '300px';
                // indexRY.style.backgroundColor = 'red';
                // document.body.removeChild(mm);
                // rongConversation.removeClass('ng-hide');

            });

            var minBtn = angular.element(document.getElementById('header').childNodes[1].childNodes[1]);
            minBtn.on('click',function () {
                // $rootScope.hideTabs = false;
                // $state.reload();
            });
            // WebIMWidget.onClose = function() {
            //     $state.reload();
            // };
        }

    });


    var myServerDiv = angular.element(document.getElementById('rong-widget-minbtn'));
    // var ox,oy;
    $scope.oy='';
    $ionicGesture.on('touch', function(e){
        $scope.$apply(function() {

            $scope.oy = e.target.offsetTop;
        })
    }, myServerDiv);
    $ionicGesture.on('drag', function(e){
         $scope.$apply(function() {

                 //
                 //         dx = e.gesture.deltaX,
                         dy = e.gesture.deltaY;
                 //
                 //     el.style.left = ox + dx + "px";
                     e.target.style.top = $scope.oy + dy +"px";
         })
       }, myServerDiv);
    //
    // document.getElementById('rong-widget-minbtn').addEventListener('touch',function (e) {
    //     ox = e.target.offsetLeft;
    //     oy = e.target.offsetTop;
    // });
    // document.getElementById('rong-widget-minbtn').addEventListener('drag',function (e) {
    //
    //     var el = e.target,
    //
    //         dx = e.gesture.deltaX,
    //         dy = e.gesture.deltaY;
    //
    //     el.style.left = ox + dx + "px";
    //     el.style.top = oy + dy +"px";
    // });



}]);
/**
 * Created by qingyun on 16/12/2.
 */
angular.module('myApp.httpFactory',[]).factory('HttpFactory',['$http','$q',function ($http,$q) {
    return {
        getData:function (url,type) {
            console.log(url);
            if (url){
                var promise = $q.defer();
                // url = "http://192.168.0.100:3000/?myUrl=" + encodeURIComponent(url);
                // url =  url;
                type = type ? type:"GET";
                $http({
                    url:url,
                    method:type,
                    timeout:20000
                }).then(function (result) {
                  promise.resolve(result.data);
                },function (err) {
                    promise.reject(err);
                });
                return promise.promise;
            }
        }
    };
}]);

angular.module('myApp.slideBox',[]).directive('mySlideBox',[function () {
    return{
        restrict:"E",
        scope:{sourceArray:'='},
        templateUrl:'slideBox.html',
        controller:['$scope','$state','$ionicSlideBoxDelegate','$element','$timeout',function ($scope,$state,$ionicSlideBoxDelegate,$element,$timeout) {
            $scope.goToDetailView = function (index) {
                console.log('进入详情页' + index);
            };
            var lastSpan = $element[0].lastChild;
            $scope.$watch('sourceArray',function (newVal,oldVal) {
                if (newVal && newVal.length) {

                    $scope.isShowSlideBox = true;

                }

            });

        }],
        replace:true

    };
}]);