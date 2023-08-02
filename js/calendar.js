/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

//console.log("Hello, world!");
document.addEventListener("DOMContentLoaded", function(){

  document.getElementById("calendar-switcher").addEventListener('change',function() {
    new_class = this.options[this.selectedIndex].value;
    
    // hide all
    var calendars = document.querySelectorAll('.responsive-iframe-container');
    calendars.forEach((cal) => cal.style.display = 'none');
    
    // show desired
    calendars = document.querySelectorAll(`.${new_class}`);
    calendars.forEach((cal) => cal.style.display = 'block');
  });
});