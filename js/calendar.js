/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

//console.log("Hello, world!");
$('document').on("ready", function(){
    $('#id').addClass('flash');
    setTimeout(function() {
          $('#id').removeClass('flash');
    }, 500);
});