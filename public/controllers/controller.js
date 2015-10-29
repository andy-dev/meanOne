var myApp = angular.module('myApp',[]);
myApp.controller('AppCtrl',['$scope', '$http', function($scope,$http){
        console.log("hello world from contrl");
}]);

// function AppCtrl(){
//     console.log("hello from cntrl")
// }