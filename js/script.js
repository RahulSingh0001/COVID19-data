const URL = "https://corona.lmao.ninja/v2/all?yesterday";

let app = angular.module('MyApp', [])

app.controller('MyCtrl', ($scope, $http) => {
    $scope.title = "Stay Home Stay Safe";
    $http.get(URL).then((response) => {

        console.log(response.data);
        $scope.all_data = response.data;
    }, (error) => {
        console.log("Error");
        console.log(error);
    });
   
    


})