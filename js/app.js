
  'use strict';

  var app = angular.module('app',['ngAnimate','ui.bootstrap.collapse']);
  app.controller('NavigationCtrl', NavigationCtrl);
  app.controller('WelcomeText', WelcomeText);
  app.controller('PersonalDetail', PersonalDetail);
  app.controller('SkillSets', SkillSets);
  app.controller('Experience', Experience);
  
  NavigationCtrl.$inject = [];

  function NavigationCtrl() {
  	var vm = this;
    vm.isCollapsed = true;
    vm.toggleCollapse = toggleCollapse;

    function toggleCollapse() {
    	vm.isCollapsed = !vm.isCollapsed;
    }
  }

  function WelcomeText($scope){
    $scope.welcometxt = {};
    $scope.welcometxt.name = 'Sourabh Panadare';
    $scope.welcometxt.title = 'Frontend/Javascript Developer';
    $scope.welcometxt.place = 'From Mumbai,Maharashtra';
  }


  function PersonalDetail($scope, $http){
    $scope.pd = {};
    $http.get('data.json').then(function(res){
        $scope.pd.name = res.data.personalinfo.name;
        $scope.pd.contact = res.data.personalinfo.contact;
        $scope.pd.email = res.data.personalinfo.email;
        $scope.pd.city = res.data.personalinfo.city;
    });
  }

  function SkillSets($scope, $http){
    $scope.skill = {};
    $http.get('data.json').then(function(res){
      $scope.skill = res.data.skillsets;
    });
  }

  function Experience($scope, $http){
    $scope.experience = {};
    $http.get('data.json').then(function(res){
      $scope.experience = res.data.experienceinfo;
    });
  }
