'use strict'

class Timer {
	constructor(input, playBtn, pauseBtn, callbacks) {
		this.input = input;
		this.playBtn = playBtn;
		this.pauseBtn = pauseBtn;
		if (callbacks) {
			this.onStart = callbacks.onStart;
			this.onTick = callbacks.onTick;
			this.onComplete = callbacks.onComplete;
		}

		this.playBtn.addEventListener('click', this.start);
		this.pauseBtn.addEventListener('click', this.pause);
		window.addEventListener('keydown', (e) => {
			if (e.key === 'Enter') this.start();
			else if (e.key === ' ') this.pause();
		})
	}

	start = () => {
		if (this.onStart) {
			this.onStart(this.timeRemaining);
		}
		this.tick();
		this.interval = setInterval(this.tick, 10);
	}

	pause = () => {
		clearInterval(this.interval);
		console.log('Timer paused')
	}

	tick = () => {
		if (this.timeRemaining <= 0) {
			this.pause();
			if (this.onComplete) {
				this.onComplete();
			}
		} else {
			this.timeRemaining -= .01;
			if (this.onTick) {
				this.onTick(this.timeRemaining);
			}
		}
	}

	get timeRemaining() {
		return parseFloat(this.input.value);
	}

	set timeRemaining(value) {
		this.input.value = value.toFixed(2);
	}

}