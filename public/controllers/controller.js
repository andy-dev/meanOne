var myApp = angular.module('myApp',[]);
myApp.controller('AppCtrl',['$scope', '$http', function($scope,$http){
        console.log("hello world from contrl");

        $http.get('/contactlist');

        person1 ={
            name:"andy",
            email: "andy@gmail.com",
            number: "9175431786",
        };

        person2 ={
            name:"andy2",
            email: "andy2@gmail.com",
            number: "9175431786",
        };

        person3 ={
            name:"andy3",
            email: "andy3@gmail.com",
            number: "9175431786",
        };

        var contactList = [person1,person2,person3];
        $scope.contactList = contactList;
}]);

// function AppCtrl(){
//     console.log("hello from cntrl")
// }