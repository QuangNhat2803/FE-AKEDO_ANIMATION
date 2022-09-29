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
    
    
    
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("modal-close")[0];

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

      


    