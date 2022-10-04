(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.items = ""
  $scope.messageClass = ""
  $scope.inputClass = ""

  $scope.submitLunch = function () {
    var items = $scope.items;
    var split = items.split(',');
    // remove empty item
    split = split.filter(x => {
      if(x === "") {
        return false;
      }
      return true;
    });
    if (split.length == 0) {
      $scope.message = "Please enter data first";
      $scope.messageClass = "red";
      $scope.inputClass = "red_input";
    } else {
      $scope.messageClass = "green"
      $scope.inputClass = "green_input";
      if (split.length < 4) {
        $scope.message = "Enjoy!";
      } else {
        $scope.message = "Too much!";
      }
    }
  };
}
})();