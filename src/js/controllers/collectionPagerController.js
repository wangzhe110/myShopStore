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
}]).controller('collectionPagerController',['$scope',"$ionicTabsDelegate",'$ionicModal','$ionicPopup','HttpFactory',function ($scope,$ionicTabsDelegate,$ionicModal,$ionicPopup,HttpFactory) {

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
  var myCollect_sessid = '?sessid=107';
    var url = 'http://114.112.94.166/sunny/wap/api/ucollection'+myCollect_sessid;

    HttpFactory.getData(url).then(function (result) {
        console.log(result);
    },function (err) {
        console.log(err);
    });


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