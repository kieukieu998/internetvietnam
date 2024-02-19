$('.slider01').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  accessibility: true,
  arrows:true,
  prevArrow: '<div class="prev slick_arrow"></div>',
  nextArrow: '<div class="next slick_arrow"></div>',
});
$('.slider02').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  accessibility: true,
  arrows:true,
  prevArrow: '<div class="prev slick_arrow"></div>',
  nextArrow: '<div class="next slick_arrow"></div>',
});

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}