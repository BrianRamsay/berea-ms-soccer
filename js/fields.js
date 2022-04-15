document.addEventListener("DOMContentLoaded", function () {
  let accordion = new Collapse(document.querySelector(".ours.collapse"), { accordion: false }).init();
  let accordion2 = new Collapse(document.querySelector(".theirs.collapse"), { accordion: false }).init();
   
  //Convert address tags to google map links - Michael Jasper 2012
  // image from https://www.flaticon.com/free-icons/google-maps" title="google maps icons">Google maps icons created by justicon - Flaticon</a>

   document.querySelectorAll('address').forEach(function (el) {
      var link = "<a href='http://maps.google.com/maps?q=" + encodeURIComponent( el.textContent ) + "' target='_blank'>" + el.innerHTML + "</a>";
      el.innerHTML = link;
   });
});
