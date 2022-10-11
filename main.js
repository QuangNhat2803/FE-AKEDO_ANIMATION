$(document).on('click', '#myVideo, #btnplay, #btnreplay', function (e) {
  var pl = document.getElementById('btnplay')
  var rpl = document.getElementById('btnreplay')
  var video = $('#myVideo').get(0); 
  if (video.paused === false) {
          video.pause();
          pl.style='display: block';
      }else if (video.paused === true)  {
          video.play();
          pl.style='display: none';
          rpl.style='display: none';
      } else {
          rpl.style='display: block';
      }
  return false;
});

$(document).on('click', '#myVideo2, #btnplay2, #btnreplay2', function (e) {
  var pl2 = document.getElementById('btnplay2')
  var rpl2 = document.getElementById('btnreplay')
  var video = $('#myVideo2').get(0); 
  if (video.paused === false) {
          video.pause();
          pl2.style='display: block';
      }else if (video.paused === true)  {
          video.play();
          pl2.style='display: none';
          rpl2.style='display: none';
      } else {
          pl2.style='display: block';
      }
  return false;
});


{
var vid = document.getElementById("myVideo");
var rpl = document.getElementById('btnreplay')
var vid2 = document.getElementById("myVideo2");
var rpl2 = document.getElementById('btnreplay2')

vid.onended = function() {
  rpl.style='display: block';
};
vid.oncanplay = function(){
  rpl.style='display: none';
};
vid2.onended = function() {
  rpl2.style='display: block';
};
vid2.oncanplay = function(){
  rpl2.style='display: none';
};
}

const nextIcon = document.querySelector(".carousel-control-prev-s2")
const prevIcon = document.querySelector(".carousel-control-next-s2")
$('.owl-carousel').owlCarousel({
  items: 1,
  loop: true,
  lazyLoad: true,
  margin: 10,
  nav: true,
  navText: [
    prevIcon,
    nextIcon
  ],
})



function changeGr1() {  
    var gr1 = document.getElementById("group1")
    var gr2 = document.getElementById("group2")
    var img2 = document.getElementById("img-s2")
    var img1 = document.getElementById("img-s1")
    gr1.style = "z-index: 2;filter: brightness(1);"
    gr2.style = "z-index: 1;filter: brightness(0.7);" 
    img2.style = "opacity: 0.5;"
    img1.style = "opacity: 1;"
  }  

function changeGr2() {  
    var gr1 = document.getElementById("group1")
    var gr2 = document.getElementById("group2")
    var img2 = document.getElementById("img-s2")
    var img1 = document.getElementById("img-s1")
    gr1.style="z-index: 1;filter: brightness(0.7);"
    gr2.style="z-index: 2;filter: brightness(1);"
    img1.style = "opacity: 0.5;"
    img2.style = "opacity: 1;"
  }
    
{
  var modal = document.getElementById("myModal");
var btn1 = document.getElementById("myBtn-1");
var btn2 = document.getElementById("myBtn-2");
var span = document.getElementsByClassName("modal-close")[0];

btn1.onclick = function() {
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

  btn2.onclick = function() {
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
} 

      


    