var c = document.getElementById('game'),
	ctx = c.getContext('2d'),
	width = 500,
	height = 750,
	gLoop;

var clear = function() {
	ctx.fillStyle = '#A8A8A8';
	ctx.fillRect(0, 0, width, height);
}

var player = new (function() {
	this.img = new Image();
	
	this.X = 200;
	this.Y = 0;
	
	this.width = 50;
	this.height = 75;
	
	this.fallSpeed = 0;
	
	this.isFalling;
	this.isJumping;
	
	this.checkFall = function() {
		if(this.Y + this.height + this.fallSpeed < height) {
			this.Y += this.fallSpeed;
			this.fallSpeed++;
		} else if (this.Y + this.height < height) {
			this.Y = height - this.height;
		} else {
			fallSpeed = 0;
		}
	}
	
	this.img.src = 'player.png';
	this.draw = function() {
		this.checkFall();
		ctx.drawImage(this.img, this.X, this.Y, 50, 75);
	}
})();

var GameLoop = function() {
	clear();
	player.draw();
	if(keydown.left) alert("left");
	gLoop = setTimeout(GameLoop, 1000 / 30);
}

GameLoop();