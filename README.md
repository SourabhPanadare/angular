
      <body ng-app="app"></body>

      var app = angular.module('app',['ngAnimate','ngMessages','ui.bootstrap.collapse']);



# Banner Section

      Text Displayed on Banner Section is displayed using angular js.

      app.controller('WelcomeText', function($scope){
          $scope.welcometxt.name = '';
      });

      <div ng-controller = "WelcomeText">
        <p>{{welcometxt.name}}</p>
      </div>

# About Section

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

    <div ng-controller = "PersonalDetail">
      <p>{{pd.name}}</p>
      <p>{{pd.contact}}</p>
    </div>

 # Skill Section

      Details displayed on skill section is displayed using angular js , json and ng-repeat

          {
            "skillsets":[
              {"title":"","btn":"","value":""},
              {"title":"","btn":"","value":""}
            ]
          }

          app.controller('SkillSets', function($scope, $http){
            $scope.skill = {};
            $http.get('data.json').then(function(res){
              $scope.skill = res.data.skillsets;
            });
         });

      <div ng-controller = "SkillSets">
       <div ng-repeat="skillInfo in skill">
          <h4>{{skillInfo.title}}</h4>
          <div class="progress-bar progress-bar-{{skillInfo.btn}} progress-bar-striped"></div>
       </div>
      </div>

 # Experience Section

      Details displayed on experience section is displayed using angular js , json , ng-repeat and owl-carousel

          {
            "experienceinfo":[
              {"date":"","post":"","company":""},
              {"date":"","post":"","company":""}
            ],
          }

         app.controller('Experience', function($scope, $http){
            $http.get('json/carousel.json').then(function(res){
              $scope.experience = res.data.experienceinfo;
            });
         });

         app.directive("owlCarousel", owlCarousel);
         app.directive('owlCarouselItem', owlCarouselItem);

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

      <div ng-controller = "Experience">
         <data-owl-carousel id="experience-carousel" class="owl-carousel" data-options="{items : 3, itemsDesktopSmall : [1199,3], itemsTablet : [768,2], itemsMobile: [479,1], navigation: false,pagination: false, rewindNav : false}">
            <div owl-carousel-item="" ng-repeat="item in experience" class="item">
                <h5 class="clr-black">{{item.date}}</h5>
            </div>
          </data-owl-carousel>
      </div>


# Education Section

        Details displayed on experience section is displayed using json , ng-repeat and owl-carousel

        {
          "educationinfo":[
            {"date":"","course":"","institute":""},
            {"date":"","course":"","institute":""}
          ]
        }

        $('#education-carousel').owlCarousel({
          jsonPath : 'json/carousel.json',
          jsonSuccess : customDataSuccess
        });


      function customDataSuccess(data){

          var content = "";
          for(var i in data["educationinfo"]){

            var date = data["educationinfo"][i].date;
            var course = data["educationinfo"][i].course;
            var institute = data["educationinfo"][i].institute;

            content += '<div class="panel panel-default"><div class="panel-heading bkg-blue"><h4 class="clr-white">'+date+'</h4></div><div class="panel-body bkg-grey"><div class="panel-img"><img class="img-responsive" src="images/education.png" alt="img"/></div></div><div class="panel-footer bkg-blue"><h5 class="clr-white">'+course+'</h5><p class="clr-white">'+institute+'</p></div></div>';
          }
            $("#education-carousel").html(content);
       }

       <div id="education-carousel" class="owl-carousel">

       </div>

# Contact Form

        app.controller('ContactForm', function($scope){
          $scope.myTxt = "Please Complete Your Form";
          $scope.myFunc = function () {
            $scope.myTxt = "Submission Successfull";
          }
        });

        <form role="form" name="contactForm" class="bkg-white contactform" ng-submit="myFunc()">
            <p class="clr-black text-center">{{myTxt}}</p>
            <div class="form-group float-label-control">
                <label for="contact">Contact</label>
                <input type="text" name="userContact" ng-model="contact" ng-pattern="/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/" ng-maxlength="10" class="form-control" placeholder="Contact Details" ng-required="true"/>
                <div ng-messages="contactForm.userContact.$error">
                  <div ng-message="required">This field is required *</div>
                  <div ng-message="pattern">Must be a valid 10 digit phone number</div>
                  <div ng-message="maxlength">Must be a valid 10 digit phone number</div>
                </div>
            </div>
            </form>

  
