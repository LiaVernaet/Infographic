// var	imageBanner = document.querySelector("#houseImages"),
//  		sigils = document.querySelectorAll(".videoLink humorous"),
//  		lightbox = document.querySelector('.lightbox'),
//  		closeLBox = lightbox.querySelector('.close-lightbox'),
//  		vidPlayer = lightbox.querySelector('video'),
//  		offSet = 600,
//  		currentSource,
//  		theExt;
//         var houseArray = ['Stark', 'Baratheon', 'Lannister', 'Tully', 'Greyjoy', 'Arryn'];



// //functions

// function closeLightBox() {
// 	lightbox.classList.remove('show-lightbox');
// //lightbox.style.display = 'none';
// vidPlayer.currentTime = 0; //rewinds video to start
// }


// // function moveBanner() {
// // 	imageBanner.style.right = (offSet * this.dataset.offset) + 'px';
// // 	houseName = this.className.split(' ')[1]; //splits "house" (0), "barathin"(1) and ".mp4". Calls for 1.
// // 	houseTagline.innerHTML = 'House ' + houseArray[this.dataset.offset];
// // }


// function showHouseVideo() {
// 	// currentSource=vidPlayer.currentSrc;
// 	// theExt = currentSource.substr(currentSource.lastIndexOf(".")); //takes .mp4
// 	vidPlayer.src='videos/humorous.mp4';
// 	lightbox.classList.add('show-lightbox');
// 	vidPlayer.load();
// 	vidPlayer.play();
// }


// //events and listeners

// closeLBox.addEventListener('click', closeLightBox);
// sigils.addEventListener('click', showHouseVideo);


// //(4) when video finishes playing, also close the lightbox
// vidPlayer.addEventListener('ended', closeLightBox, false);

var waypoint = new Waypoint({
	element: document.getElementsByClassName('processPanel'),
	handler: function() {
	  notify('Basic waypoint triggered')
	}
  })

//   http://imakewebthings.com/waypoints/guides/getting-started/