'use strict'

const input = document.querySelector('#input');
const playBtn = document.querySelector('#play');
const pauseBtn = document.querySelector('#pause');

const circle = document.querySelector('.circle');
const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);
let duration;

const timer = new Timer(input, playBtn, pauseBtn, {
	onStart(totalDuration) {
		console.log('Timer started');
		duration = totalDuration;
	},

	onTick(timeRemaining) {
		circle.setAttribute('stroke-dashoffset', perimeter * timeRemaining / duration - perimeter);
	},

	onComplete() {
		console.log('Timer completed')
	}
});