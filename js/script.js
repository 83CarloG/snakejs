$(document).ready(function	() {
	// oggetto jquery canvas
	var canvas = $('#canvas')[0];
	// ctx è il ns oggetto disegnabile
	var ctx = canvas.getContext('2d');

	var snake = [
		{	x: 50, y: 100	},
		{	x: 50, y: 90	},
		{	x: 50, y: 80	}
	];
	var snakeWidth = 10;
	var snakeHeight = 10;
	drawSnake(snake);


	function drawSnake (e)	{
		$(e).each(function	(index, value) {
			ctx.fillStyle = 'red';
			ctx.fillRect(value.x, value.y, snakeWidth, snakeHeight);
		});
	}
});
