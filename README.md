# Bootstrap-Gulp:- gulp mdb-go
  
  https://mdbootstrap.com/education/bootstrap/gulp-installation/
  https://mdbootstrap.com/education/bootstrap/customization/
  https://mdbootstrap.com/education/bootstrap/portfolio-lesson-(indexval)/

# Installation Process:-(Gulp)

  sudo apt install curl
  curl -sL https://deb.nodesource.com/setup_10.x | sudo bash -

  sudo apt-get update
  sudo apt-get install nodejs
  sudo apt-get install npm

  npm install gulp -g
  Download Zip File From Website and unzip it
  npm init
  npm install --save-dev gulp
  npm install --save-dev gulp-sass gulp-autoprefixer gulp-cssmin browser-sync gulp-concat gulp-minify gulp-rename gulp-imagemin
  gulp mdb-go

  ## To Run File when downloaded from git on local machine
  npm install
  gulp mdb-go

# Files That Changes Automatically

  Note:- Don't Change the Folder Name 
  dist/css/style.css && dist/img/
  scss/mdb.scss :- Comment the library which is not required
  js/modules.js :- Comment the library which is not required

  Structure:- 
    dist/css/style.css
    dist/js/yourname.js
    dist/img, dist/font


# Bootstrap4 without mdb

  https://github.com/JayeshLab/bootstrap-4-sass-gulp-4-boilerplate

  Installation Process Same As Above

  npm i -g gulp-cli

  gulp
  gulp dev

  Structure:-
     assets/scss/app.scss
     assets/img/
     assets/js/app.js
     index.html

