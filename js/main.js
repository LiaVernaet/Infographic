 var imageLink = document.querySelectorAll('.imageLink'),
  		lightbox = document.querySelector('.lightbox'),
  		closeLBox = lightbox.querySelector('.close-lightbox'),
		  vidPlayer = lightbox.querySelector('video'),
		  container = document.getElementById('container'),
		  modelSheets= document.getElementById('model_sheets'),
		  storyboards= document.getElementById('storyboards'),
		  inking= document.getElementById('lining_and_inking'),
		  count = 0,
  		 currentSource;
		var videos = ['humorous.mp4', 'gertie.mp4', 'snowwhite.mp4', 'storyofdogs.mp4', 'renaissance.mp4'];



		var keys = {37: 1, 38: 1, 39: 1, 40: 1};

		modelSheets.style.webkitAnimationPlayState = "paused";
		storyboards.style.webkitAnimationPlayState = "paused";
		inking.style.webkitAnimationPlayState = "paused";
		
//animate in process panels on scroll
  function processScroll(ev){
	if(window.pageYOffset>950){
		
		modelSheets.style.webkitAnimationPlayState = "running";
	 }

	 if(window.pageYOffset>1850){
		
		storyboards.style.webkitAnimationPlayState = "running";
	 }

	 if(window.pageYOffset>2900){
		
		inking.style.webkitAnimationPlayState = "running";
	 }



 }
window.addEventListener("scroll", processScroll);



		function preventDefault(e) {
		  e = e || window.event;
		  if (e.preventDefault)
			  e.preventDefault();
		  e.returnValue = false;  
		}
		
		function preventDefaultForScrollKeys(e) {
			if (keys[e.keyCode]) {
				preventDefault(e);
				return false;
			}
		}

 function closeLightBox() {
 lightbox.classList.remove('show-lightbox');
 vidPlayer.currentTime = 0;
 vidPlayer.muted = true;

 //enable scrolling
 if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null; 
    window.onwheel = null; 
    window.ontouchmove = null;  
    document.onkeydown = null;  
 }


 function showVideo() {
	var pick = this.dataset.pick;
	console.log(pick);
	vidPlayer.src = 'videos/'+videos[pick]
 	lightbox.classList.add('show-lightbox');
 	vidPlayer.load();
	vidPlayer.play();
	count = pick;

	//prevent scrolling while video is playing
	if (window.addEventListener) // older FF
	window.addEventListener('DOMMouseScroll', preventDefault, false);
	window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
 }


 //events and listeners
  for(var i = 0; i < imageLink.length; i++) {
 	imageLink[i].addEventListener('click', showVideo, false);
 }
 closeLBox.addEventListener('click', closeLightBox);
 imageLink.addEventListener('click', showVideo);



 //(4) when video finishes playing, also close the lightbox
 vidPlayer.addEventListener('ended', closeLightBox, false);
 



// var waypoint = new Waypoint({
// 	element: document.getElementsByClassName('processPanel'),
// 	handler: function() {
// 	  notify('Basic waypoint triggered')
// 	}
//   })

//   http://imakewebthings.com/waypoints/guides/getting-started/