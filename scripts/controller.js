var app=angular.module('financialApp',[]);
app.controller('finController', function($scope, $http){
    $scope.x = "Thimarket";
    $scope.secClass = ["Equity", "Mutual funds", "Bond", "Commodities", "Forex", "Exchange Traded Funds", ];
    $scope.secTitle = $scope.secClass[0];
    $scope.fun = function(name){$scope.secTitle =name;};
    $scope.user = "Data";
});