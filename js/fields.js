$(document).ready(function () {
  let accordion = new Collapse(document.querySelector(".ours.collapse"), { accordion: false }).init();
  let accordion2 = new Collapse(document.querySelector(".theirs.collapse"), { accordion: false }).init();
   
  //Convert address tags to google map links - Michael Jasper 2012
   document.querySelector('address').each(function () {
      var link = "<a href='http://maps.google.com/maps?q=" + encodeURIComponent( $(this).text() ) + "' target='_blank'>" + $(this).text() + "</a>";
      document.querySelector(this).html(link);
   });
});
