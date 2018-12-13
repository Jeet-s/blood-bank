var app = angular.module("myApp");

app.controller("mainCtrl", mainController);

function mainController($scope, bloodData){
    $scope.blood_data = bloodData;
}