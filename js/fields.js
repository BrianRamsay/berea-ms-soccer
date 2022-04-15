document.addEventListener("DOMContentLoaded", function () {
  let accordion = new Collapse(document.querySelector(".ours.collapse"), { accordion: false }).init();
  let accordion2 = new Collapse(document.querySelector(".theirs.collapse"), { accordion: false }).init();
   
  //Convert address tags to google map links - Michael Jasper 2012
  // image from https://www.flaticon.com/free-icons/google-maps created by justicon - Flaticon
  document.querySelectorAll('address').forEach(function (el) {
    let image = '<img src="https://cdn.glitch.global/29be5113-ffc2-4065-907f-499e5f550584/google-maps icon.png?v=1650049842723" alt="Map this address" />';
    let linkInner =  image + "<span>" + el.innerHTML + "</span>";
    let link = "<a href='http://maps.google.com/maps?q=" + encodeURIComponent( el.textContent ) + "' target='_blank'>" + linkInner + "</a>";
    el.innerHTML = link;
  });
});
