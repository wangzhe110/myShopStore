/**
 * Created by qingyun on 16/12/2.
 */
angular.module('myApp.httpFactory',[]).factory('HttpFactory',['$http','$q',function ($http,$q) {
    return {
        getData:function (url,params,type) {
            console.log(url);
            if (url){
                var promise = $q.defer();
                // url = "http://192.168.0.100:3000/?myUrl=" + encodeURIComponent(url);
                // url =  url;
                type = type ? type:"GET";
                params = params ? params:{};
                $http({
                    url:url,
                    method:type,
                    params:params,
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