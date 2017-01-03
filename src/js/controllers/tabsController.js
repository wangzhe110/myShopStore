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