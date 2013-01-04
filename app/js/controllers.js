'use strict';

/* Controllers */


function MyCtrl1($scope, $http) {
                   $scope.testvalue="howdy";
//    var jpurl = "http://us.battle.net/api/wow/battlePet/ability/640?jsonp=JSON_CALLBACK";
    var jpurl = "http://us.battle.net/api/wow/character/Azgalor/Delevent?fields=pets&jsonp=JSON_CALLBACK";

    $http.jsonp(jpurl).success(function(data){
        $scope.pets =  data;
    });

//    $scope.doRequest = function() {
//        var jpurl = "http://us.battle.net/api/wow/battlePet/ability/640?jsonp=JSON_CALLBACK";
//
//        $http.jsonp(jpurl).success(function(data){
//            $scope.testJsonp =  data;
//        });
//    };
}
//MyCtrl1.$inject = [];


function MyCtrl2() {
}
MyCtrl2.$inject = [];
