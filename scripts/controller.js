var app=angular.module('financialApp',[]);
app.controller('finController', function($scope, $http){
    $scope.x = "Thimarket";
    $scope.secClass = ["Equities", "Mutual funds", "Bonds", "Commodities", "Forex", "Exchange Traded Funds","Derivatives" ];
    $scope.secTitle = $scope.secClass[0];
    $scope.fun = function(name){$scope.secTitle =name;};
    $scope.user = "Data";
        $scope.stockData = function(stockid){
        url = "http://www.google.com/finance/info?q=AAPL&callback=JSON_CALLBACK";        
            $http.jsonp(url).
            success(function(data,status,headers,config) {
              console.warn(data);
              // alert(data);
                $scope.dataStr = "";
                for(x in data[0])
                     $scope.dataStr += data[0][x];
                //successcb(data);
            }).
            error(function(data, status,headers, config) {
              //alert("Status is " + status);
            
            });
    };
    
});


app.directive('draggable', function($document) {
    return function(scope, element, attr) {
      var startX = 0, startY = 0, x = 0, y = 0;
      element.css({
       position: 'relative',
       
      });
      element.on('mousedown', function(event) {
        // Prevent default dragging of selected content
        event.preventDefault();
        startX = event.screenX - x;
        startY = event.screenY - y;
        $document.on('mousemove', mousemove);
        $document.on('mouseup', mouseup);
      });

      function mousemove(event) {
        if(x<0 || y<0){
            if(x<0)
                x = startX;
            if(y<0)
                y = startY;
                element.css({
                top: y + 'px',
                left:  x + 'px'
                });
            return;  
        }
            
        y = event.screenY - startY;
        x = event.screenX - startX;
        element.css({
          top: y + 'px',
          left:  x + 'px'
        });
      }

      function mouseup() {
        $document.off('mousemove', mousemove);
        $document.off('mouseup', mouseup);
      }
    };
  });