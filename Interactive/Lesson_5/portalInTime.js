'use strict';

let aimLn = document.getElementById('aimLines');
let aimC1 = document.getElementById('aimCircle1');
let aimC2 = document.getElementById('aimCircle2');
let portal = document.getElementById('mask-circle');

let portalRadius = parseInt(/(\d*)/g.exec(portal.getAttribute('r')));
let previusXposition = 0;
let aimRotate1 = 0;
let aimRotate2 = 0;
let jumpFlag = false;

document.getElementById('vid1').addEventListener(
	'loadedmetadata',
	function () {
		this.currentTime = 127;
		this.play();
	},
	false,
);

window.addEventListener(
	'mousemove',
	e => {
		portal.setAttribute('cx', e.pageX);
		portal.setAttribute('cy', e.pageY);

		aimLn.setAttribute('transform', `translate(${e.pageX},${e.pageY})`);

		if (previusXposition < e.pageX) {
			aimRotate1++;
			aimRotate2--;
		} else {
			aimRotate1--;
			aimRotate2++;
		}

		aimC1.setAttribute('cx', e.pageX);
		aimC1.setAttribute('cy', e.pageY);
		aimC2.setAttribute('cx', e.pageX);
		aimC2.setAttribute('cy', e.pageY);

		previusXposition = e.pageX;
	},
	false,
);
let portalJump = () => {
	portalRadius++;
	portal.setAttribute('r', portalRadius + '%');
	if (portalRadius < 100) {
		setTimeout(portalJump);
	}
};

let portalBackJump = () => {
	portalRadius--;
	portal.setAttribute('r', portalRadius + '%');
	if (portalRadius > 15) {
		setTimeout(portalBackJump, 1);
	}
};

document.onclick = function (e) {
	if (jumpFlag) {
		portalBackJump();
		jumpFlag = false;
	} else {
		portalJump();
		jumpFlag = true;
	}
};
