'use strict';

let rotateX = 0,
	rotateY = 0;

let cursorPosX = 0,
	cursorPosY = 0;

let view = 2000;

window.addEventListener(
	'mousemove',
	e => {
		if (cursorPosX < e.pageX - 2) {
			rotateY += 2;
		} else if (cursorPosX > e.pageX + 2) {
			rotateY -= 2;
		}

		if (cursorPosY < e.pageY - 2) {
			rotateX += 2;
		} else if (cursorPosY > e.pageY + 2) {
			rotateX -= 2;
		}

		cursorPosX = e.pageX;
		cursorPosY = e.pageY;

		document.querySelector(
			'.rubikCube',
		).style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
	},
	false,
);

document.onkeydown = e => {
	if (e.code == 'ArrowRight') {
		view += 50;
	} else if (e.code == 'ArrowLeft') {
		view -= 50;
	}

	document.querySelector('.rubikCube').style.perspective = `${view}px`;
};

// document.onkeydown = e => {
// 	console.log(e.code);
// 	switch (e.code) {
// 		case 'ArrowRight':
// 			rotateY -= 2;
// 			break;
// 		case 'ArrowUp':
// 			rotateX += 2;
// 			break;
// 		case 'ArrowLeft':
// 			rotateY += 2;
// 			break;
// 		case 'ArrowDown':
// 			rotateX -= 2;
// 			break;
// 		default:
// 			break;
// 	}

// 	document.querySelector(
// 		'.rubikCube',
// 	).style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
// };
