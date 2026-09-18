document.addEventListener("DOMContentLoaded", function () {
  let accordion = new Collapse(document.querySelector(".ours.collapse"), { accordion: false }).init();
  let accordion2 = new Collapse(document.querySelector(".theirs.collapse"), { accordion: false }).init();
   
  //Convert address tags to google map links - Michael Jasper 2012
  // image from https://www.flaticon.com/free-icons/google-maps created by justicon - Flaticon
  document.querySelectorAll('address').forEach(function (el) {
    let image = '<img src="images/googlemaps.svg" alt="Map this address" />';
    let linkInner =  image + "<span>" + el.innerHTML + "</span>";
    let link = "<a href='http://maps.google.com/maps?q=" + encodeURIComponent( el.textContent ) + "' target='_blank'>" + linkInner + "</a>";
    el.innerHTML = link;
  });
});
