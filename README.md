# bootstrap-angularjs

<body ng-app="app"></body>

var app = angular.module('app',['ngAnimate','ngMessages','ui.bootstrap.collapse']);



Banner Section

Text Displayed on Banner Section is displayed using angular js.

 app.controller('WelcomeText', function($scope){
      $scope.welcometxt.name = '';
  });

  <div ng-controller = "WelcomeText"></div>
  <p>{{welcometxt.name}}</p>

About Section

  1. My Story:- Paragraph is displayed using getJSON and json file.

  {
    aboutinfo:[
      {"para":""},
      {"para":""}
    ]
  }

  $.getJSON( "data.json", function(data) {

    var content = "";
    $.each(data.aboutinfo, function(key, val){
      content += '<p>'+val.para+'</p>'
   });

   $('#aboutpara').html(content);
 });

 2. Personal Info:- Details are displayed using angular js and json

 {
   "personalinfo":{
     "name":"",
     "contact":""
   }
 }

 app.controller('PersonalDetail', function($scope, $http){
   $scope.pd = {};
   $http.get('data.json').then(function(res){
     $scope.pd.name = res.data.personalinfo.name;
     $scope.pd.contact = res.data.personalinfo.contact;
   });
});

<div ng-controller = "PersonalDetail"></div>
<p>{{pd.name}}</p>
<p>{{pd.contact}}</p>

  
