var app=angular.module('financialApp',[]);
app.controller('finController', function($scope, $http){
    $scope.x = "Thimarket";
    $scope.secClass = [[["Equities"], ['Apple','Google','Microsoft','Facebook','Twitter']], [["Mutual funds"], ["SPY	SPDR S&P 500 ETF", "VFIAX	Vanguard 500 Index;Adm","VTSAX	Vanguard TSM Idx;Adm", "FDRXX	Fidelity Cash Reserves","VMMXX	Vanguard Prime MM;Inv"
]], [["Bonds"],["Colorado Bond Shares Tax-Exempt","Gurtin California Muni Val Inst","Gurtin National Muni Val Inst","Zeo Strategic Income I",
"Guggenheim Floating Rate Strat"]],[["Commodities"],["Gold", "Copper","Silver","Sugar","Corn","Cotton","Coffee","Crude oil"]], [["Forex"],[
"EURUSD","GBPUSD","USDJPY","USDCHF","AUDUSD","USDCAD"]], [["Exchange Traded Funds"],["SPDR S&P 500 ETF","iShares S&P 100 ETF","iShares U.S. Preferred Stock ETF","iShares Gold Trust","Market Vectors Gold Miners ETF"]],[["Derivatives"],["USD1601","EUR1512","USD1511","USD1512","EUR/USD1511","USD/JPY1512"
]]];
    $scope.secTitle = $scope.secClass.secName;
    $scope.setSecName = function(secName, secTitle){
        $scope.secName = secName;
        $scope.secTitle = secTitle;
    };
    $scope.fun = function(name){
        return;
    };

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