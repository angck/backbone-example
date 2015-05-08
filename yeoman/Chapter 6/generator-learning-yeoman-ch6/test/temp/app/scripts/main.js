 /* Script for my-test-site */
   $(document).ready(function(){
     var App = {
       config: null,
       Models: {},
       Controllers: {},
       Views: {},
       init: function(){
         console.log('My Test Site is ready to
           rock and roll!');
         return this;
} };
     window.App = App.init();
   });
