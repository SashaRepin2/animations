'use strict';

function Circle(positionX, positionY, radius, fill, strokeWidth, stroke) {
	this.positionX = positionX || 0;
	this.positionY = positionY || 0;
	this.radius = radius || 7;
	this.fill = fill || randRGBColor();
	this.strokeWidth = strokeWidth || 2;
	this.stroke = stroke || randRGBColor();

	this.draw = function () {
		JScontentCreation.innerHTML += `<circle cx="${this.positionX}" cy="${this.positionY}" r="${this.radius}"
        fill="${this.fill}" stroke="${this.stroke}" stroke-width="${this.strokeWidth}" />`;
	};
}

function randRGBColor() {
	let r = Math.floor(Math.random() * 256),
		g = Math.floor(Math.random() * 256),
		b = Math.floor(Math.random() * 256);

	return '#' + r.toString(16) + b.toString(16) + g.toString(16);
}

window.addEventListener(
	'mousemove',
	e => {
		let c1 = new Circle(e.pageX, e.pageY);
		c1.draw();
	},
	false,
);
