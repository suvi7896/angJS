(function(){

'use strict';


angular.module('myFirstApp', [])

.controller('MyFirstController',function ($scope)
{
$scope.name = "Suvigya";

$scope.sayHello = function () {
  return "Hello Fellas!";
};
});


})();
