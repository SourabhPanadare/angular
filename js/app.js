
  'use strict';

  var app = angular.module('app',['ngAnimate','ngMessages','ui.bootstrap.collapse']);

  app.controller('NavigationCtrl', NavigationCtrl);
  app.controller('WelcomeText', WelcomeText);
  app.controller('PersonalDetail', PersonalDetail);
  app.controller('SkillSets', SkillSets);
  app.controller('Experience', Experience);
  app.controller('ContactForm', ContactForm);

/*-------------------------------Owl Carousel-----------------------------------*/

  app.directive("owlCarousel", owlCarousel);
  app.directive('owlCarouselItem', owlCarouselItem);

/*--------------------------------End-------------------------------------------*/
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
    $http.get('json/carousel.json').then(function(res){
      $scope.experience = res.data.experienceinfo;
    });
  }

  function ContactForm($scope){
      $scope.myTxt = "Please Complete Your Form";
    $scope.myFunc = function () {
      $scope.myTxt = "Submission Successfull";
    }
  }

/*----------------------------------------------------Owl Carousel---------------------------*/

  function owlCarousel(){
    return {
  		restrict: 'E',
  		transclude: false,
  		link: function (scope) {
  			scope.initCarousel = function(element) {
  			  // provide any default options you want
  				var defaultOptions = {
  				};
  				var customOptions = scope.$eval($(element).attr('data-options'));
  				// combine the two options objects
  				for(var key in customOptions) {
  					defaultOptions[key] = customOptions[key];
  				}
  				// init carousel
  				$(element).owlCarousel(defaultOptions);
  			};
  		}
  	};
  }

  function owlCarouselItem(){
    return {
      restrict: 'A',
      transclude: false,
      link: function(scope, element) {
        // wait for the last item in the ng-repeat then call init
        if(scope.$last) {
          scope.initCarousel(element.parent());
        }
      }
    };
  }
