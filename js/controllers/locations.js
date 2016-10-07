/**
 * Created by Brad.Lifferth on 10/6/2016.
 */
angular.module('devmtnTravel').controller('locationsCtrl', function(mainSrv, $scope) {

    $scope.data = mainSrv.travelInfo;

})