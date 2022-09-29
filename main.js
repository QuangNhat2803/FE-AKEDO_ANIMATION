$(document).on('click', 'video, #btnplay, #btnreplay', function (e) {
  var pl = document.getElementById('btnplay')
  var rpl = document.getElementById('btnreplay')
  var video = $('video').get(0);  // This line has been updated.
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
    
function changeGr1() {  
    var gr1 = document.getElementById("group1")
    var gr2 = document.getElementById("group2")
    gr1.style="z-index: 2;filter: brightness(1);"
    gr2.style="z-index: 1;filter: brightness(0.7);" 
     
  }  

  function changeGr2() {  
    var gr1 = document.getElementById("group1")
    var gr2 = document.getElementById("group2")
    gr1.style="z-index: 1;filter: brightness(0.7);"
    gr2.style="z-index: 2;filter: brightness(1);"
  }
    
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

      


    