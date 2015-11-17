var app=angular.module('financialApp',[]);
app.controller('finController', function($scope, $http){
    $scope.x = "Thimarket";
    //$scope.secClass = ["Equities", "Mutual funds", "Bonds", "Commodities", "Forex", "Exchange Traded", "Funds","Derivatives"];
    $scope.secClass = [];
    $scope.secTitle = $scope.secClass[0];
    $scope.fun = function(name){$scope.secTitle =name;};
    $scope.user = "Data";
    $scope.objectCounter = 0;
    $scope.addObject = function(stockid){
        //alert();
        //$scope.secClass.push(stockid+$scope.objectCounter);
        $scope.secClass.splice(0, 0, $scope.objectCounter++);
        //$scope.objectCounter++;
    };
    $scope.doSomething = function(){
    
    };
});


app.directive('myEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 77 && event.ctrlKey) {
                scope.$apply(function (){
                    scope.$eval(attrs.myEnter);
                    scope.append(); // adds new stack block 
                });

                event.preventDefault();
            }else if(event.which === 66 && event.ctrlKey){
                alert(document.activeElement);
                document.activeElement.remove();
                
            }
        });
    };
});

app.directive('draggable', function($document) {
    return function(scope, element, attr) {
      var startX = 0, startY = 0, x = 0, y = 0;
      element.css({
       position: 'relative', });
      element.on('mousedown', function(event) {
        // Prevent default dragging of selected content
        //event.preventDefault();
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


var dname = 'stack';
app.directive(dname, function() {
    return {
        restrict: "E",
        template: "<button data-ng-click='append()' class='push'>Push+</button>" + "<div id='testdiv' class='stackstyle'></div>",
        controller: function($scope, $element, $attrs) {
            $scope.append = function() {
                var p = angular.element("<DIV id='stackPlate'><textarea class='datastyle' spellcheck='false'></textarea></DIV>");
                //p.text("Appended");
                $element.find("#testdiv").prepend(p);
                //$element.find('#testdiv').appendTo(p);
            }
        }
    }
});

function finController($scope) {
    $scope.name = 'Superhero';
}