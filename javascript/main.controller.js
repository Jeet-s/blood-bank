var app = angular.module("myApp");

app.controller("mainCtrl", mainController);

function mainController($scope, bloodData) {
    $scope.blood_data = bloodData;
    $scope.required_blood_units;
    $scope.required_blood_group;
    $scope.canDonateFun = canDonateFun;
    $scope.isAvailableFun = isAvailableFun;
    $scope.anythingAvailable = false;

    function canDonateFun() {
        $scope.blood_data.forEach(group => {
            if (group.canDonateTo.includes($scope.required_blood_group.group)) {
                group.canDonate = true;
            } else {
                group.canDonate = false;
            }
        });
        isAnythingAvailable();
    }

    function isAvailableFun() {
        $scope.blood_data.forEach(group => {
            if ($scope.required_blood_units <= group.count) {
                group.isAvailable = true;
            } else {
                group.isAvailable = false;
            }
        });
        isAnythingAvailable();
    }

    function isAnythingAvailable() {
        var flag = false;
        $scope.blood_data.forEach(group => {
            if (group.canDonate === true && group.isAvailable === true) {
                flag = true;
            }
        });
        $scope.anythingAvailable = flag;
    }



    $scope.dropped = function (dragEl, dropEl) {

        var drop = angular.element(dropEl);
        var drag = angular.element(dragEl);

        imgSrc = drag.attr("data-img");
        index = drag.attr("data-grp");
        $scope.blood_data[index].count -= $scope.required_blood_units;

        drop.attr('style', 'background-image: url("' + imgSrc + '");');
        drop.addClass('dropped-bottle');
        drop.addClass('green-container');
        document.querySelector('.bottle-count').style.color = 'rgb(100,100,100)';
        document.querySelector('.bottle-count').innerHTML = $scope.required_blood_units;
        $scope.isAvailableFun();
        $scope.canDonateFun();
        $scope.$apply();
    }

}
