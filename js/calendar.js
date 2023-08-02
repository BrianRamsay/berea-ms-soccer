/* Once the switcher is used, the media queries no longer work. hmm. */

document.addEventListener("DOMContentLoaded", function(){
  document.getElementById("calendar-switcher").addEventListener('change',function() {
    new_class = this.options[this.selectedIndex].value;
    
    // hide all
    var calendars = document.querySelectorAll('.responsive-iframe-container');
    calendars.forEach((cal) => cal.style.display = 'none');
    
    // show desired
    calendars = document.querySelectorAll(`.${new_class}`);
    calendars.forEach(function(cal) {
      const width = window.innerWidth;
      const is_big = cal.classList.contains('big-container');
      var display = (is_big) ? 'block' : 'none'
      if(width < 650) {
          display = (is_big) ? 'none' : 'block'
      }
      cal.style.display = display;
    });
  });
});