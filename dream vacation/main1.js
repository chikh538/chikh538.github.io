$(document).ready(function() {
			var colors = ["#739600", "#1F5EA8", "#F72C2C", "#FA5021", "#FB9F54", "#FFAD00", "#FFEB3B", "#55C934", "#4CAF58", "#1FA895", "#1FD2DB", "#2196F3", "#61338F", "#8F3378", "#E91E63", "#B32E37"];
			var rand = Math.floor(Math.random() * colors.length);
			// console.log(colors.length + " " + rand);
			$('.change').css("background-color", colors[rand]);

			var img;
			var positionTop;
			var positionLeft;

			Mousetrap.bind('p l a n e', function() {
				img = 'img/airplane.png';
				positionTop = getRandomInt(10, 20);
				positionLeft = getRandomInt(30, 40);
				appendNewImage(img, positionTop, positionLeft);
			});

			Mousetrap.bind('t a n', function() {
				img = 'img/chair.png';
				positionTop = getRandomInt(65, 70);
				positionLeft = getRandomInt(10, 90);
				appendNewImage(img, positionTop, positionLeft);
			});

			Mousetrap.bind('c r a b', function() {
				img = 'img/crab.png';
				positionTop = getRandomInt(90, 100);
				positionLeft = getRandomInt(0, 100);
				appendNewImage(img, positionTop, positionLeft);
			});

			Mousetrap.bind('d o g', function() {
				img = 'img/dog.png';
				positionTop = getRandomInt(80, 90);
				positionLeft = getRandomInt(0, 100);
				appendNewImage(img, positionTop, positionLeft);
			});

			Mousetrap.bind('f l o a t i e', function() {
				img = 'img/floatie.png';
				positionTop = getRandomInt(60, 75);
				positionLeft = getRandomInt(0, 100);
				appendNewImage(img, positionTop, positionLeft);
			});

			Mousetrap.bind('i s l a n d', function() {
				img = 'img/island.png';
				positionTop = getRandomInt(50, 60);
				positionLeft = getRandomInt(10, 80);
				appendNewImage(img, positionTop, positionLeft);
			});

			Mousetrap.bind('k a y a k', function() {
				img = 'img/kayak.png';
				positionTop = getRandomInt(60, 75);
				positionLeft = getRandomInt(0, 100);
				appendNewImage(img, positionTop, positionLeft);
			});

			Mousetrap.bind('p a l m', function() {
				img = 'img/palmtree.png';
				positionTop = getRandomInt(65, 90);
				positionLeft = getRandomInt(0, 100);
				appendNewImage(img, positionTop, positionLeft);
			});

			Mousetrap.bind('s u n', function() {
				img = 'img/sun.png';
				positionTop = getRandomInt(15, 10);
				positionLeft = getRandomInt(20, 100);
				appendNewImage(img, positionTop, positionLeft);
			});

			Mousetrap.bind('y a c h t', function() {
				img = 'img/yacht.png';
				positionTop = getRandomInt(55, 80);
				positionLeft = getRandomInt(20, 80);
				appendNewImage(img, positionTop, positionLeft);
			});

			Mousetrap.bind('p o o l', function() {
				img = 'img/pool.png';
				positionTop = getRandomInt(25, 50);
				positionLeft = getRandomInt(40, 60 );
				appendNewImage(img, positionTop, positionLeft);
			});

			Mousetrap.bind('g r a s s', function() {
				img = 'img/grass.png';
				positionTop = getRandomInt(65, 80);
				positionLeft = getRandomInt(30, 80 );
				appendNewImage(img, positionTop, positionLeft);
			});


			Mousetrap.bind('v i l l a', function() {
				img = 'img/villa.png';
				positionTop = getRandomInt(50, 60);
				positionLeft = getRandomInt(40, 60 );
				appendNewImage(img, positionTop, positionLeft);
			});

			Mousetrap.bind('c l o u d s', function() {
				img = 'img/clouds.png';
				positionTop = getRandomInt(0, 20);
				positionLeft = getRandomInt(50, 90 );
				appendNewImage(img, positionTop, positionLeft);
			});

			Mousetrap.bind('c o c o n u t', function() {
				img = 'img/coconut.png';
				positionTop = getRandomInt(80, 90);
				positionLeft = getRandomInt(20, 80 );
				appendNewImage(img, positionTop, positionLeft);
			});

			Mousetrap.bind('s a n d', function() {
				img = 'img/sand.png';
				positionTop = getRandomInt(80, 90);
				positionLeft = getRandomInt(40, 60 );
				appendNewImage(img, positionTop, positionLeft);
			});

			Mousetrap.bind('s k y d i v e', function() {
				img = 'img/skydive.png';
				positionTop = getRandomInt(10, 20);
				positionLeft = getRandomInt(70, 90);
				appendNewImage(img, positionTop, positionLeft);
			});

			Mousetrap.bind('o c e a n', function() {
				img = 'img/ocean.png';
				positionTop = getRandomInt(95, 100);
				positionLeft = getRandomInt(30, 90 );
				appendNewImage(img, positionTop, positionLeft);
			});

			Mousetrap.bind('s u r f', function() {
				img = 'img/surf.png';
				positionTop = getRandomInt(55, 65);
				positionLeft = getRandomInt(10, 90 );
				appendNewImage(img, positionTop, positionLeft);
			});

			Mousetrap.bind('g o l f', function() {
				img = 'img/golf.png';
				positionTop = getRandomInt(80, 90);
				positionLeft = getRandomInt(20, 90 );
				appendNewImage(img, positionTop, positionLeft);
			});

			Mousetrap.bind('c a r t', function() {
				img = 'img/golfcart.png';
				positionTop = getRandomInt(70, 80);
				positionLeft = getRandomInt(20, 90 );
				appendNewImage(img, positionTop, positionLeft);
			});

			Mousetrap.bind('k i t e', function() {
				img = 'img/kite.png';
				positionTop = getRandomInt(10, 20);
				positionLeft = getRandomInt(60, 80 );
				appendNewImage(img, positionTop, positionLeft);
			});


});

function appendNewImage(img, positionTop, positionLeft) {
	var nameFromImg = img.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'');
	$('body').append('<img class="' + nameFromImg + '" src="' + img + '" style="position: fixed; top: '+ positionTop + '%; left: ' + positionLeft + '%; transform: translate(-50%, -50%);">');
};

// $(document).on('keypress', function(e) {
//   var key = e.key;
//   var img;
//   var text;
//
//
//   console.log('keypress:', key);
//
//   if ( key == 'a' ) {
//     img = 'img/airplane.png';
//   } else if ( key == 'b' ) {
//     img = 'img/beachchair.png';
//   } else if ( key == 'c' ) {
//     img = 'img/crab.png';
//   }  else if ( key == 'd' ) {
//     img = 'img/dog.png';
//   }
//
//   if ( key == 'e' ) {
//     img = 'img/flamingo.png';
//   } else if ( key == 'f' ) {
//     img = 'img/flamingo.png';
//   } else if ( key == 'g' ) {
//     img = 'img/crab.png';
//   }  else if ( key == 'h' ) {
//     img = 'img/dog.png';
//   }
//
//   if ( key == 'i' ) {
//     img = 'img/island.png';
//   } else if ( key == 'j' ) {
//     img = 'img/flamingo.png';
//   } else if ( key == 'k' ) {
//     img = 'img/crab.png';
//   }  else if ( key == 'l' ) {
//     img = 'img/dog.png';
//   }
//
//   // etc.
//
//   // if ( img ) {
//   //   $('body').append('<img src="' + img + '" style="position: fixed; top: '+ Math.random() * 100 + '%; left: ' + Math.random() * 100 + '%; transform: translate(-50%, -50%); max-width: 300px;">');
//   // } else {
//   //   $('body').append('<h2 style="position: fixed; top: '+ Math.random() * 100 + '%; left: ' + Math.random() * 100 + '%; transform: translate(-50%, -50%); font-size: ' + Math.random() * 200 + 'px;">' + key + '</h2>');
//   // }
// 	switch (img) {
// 		case "img/airplane.png":
// 			$('body').append('<img src="' + img + '" style="position: fixed; top: '+ getRandomInt(10, 20) + '%; left: ' + Math.random() * 100 + '%; transform: translate(-50%, -50%); max-width: 300px;">');
// 			break;
// 		case "img/beachchair.png":
// 			$('body').append('<img src="' + img + '" style="position: fixed; top: '+ getRandomInt(80, 85) + '%; left: ' + Math.random() * 100 + '%; transform: translate(-50%, -50%); max-width: 600px;">');
// 			console.log("beachchair");
// 			break;
// 		case "img/dog.png":
// 			$('body').append('<img src="' + img + '" style="position: fixed; top: '+ getRandomInt(90, 95) + '%; left: ' + Math.random() * 100 + '%; transform: translate(-50%, -50%); max-width: 100px;">');
// 			console.log("dog");
// 			break;
// 		case "img/flamingo.png":
// 			$('body').append('<img src="' + img + '" style="position: fixed; top: '+ getRandomInt(50, 60) + '%; left: ' + Math.random() * 100 + '%; transform: translate(-50%, -50%); max-width: 220px;">');
// 			break;
//
// 		default:
// 			console.log("not airplane")
// 	}
// });

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
