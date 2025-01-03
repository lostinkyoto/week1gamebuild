const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Set canvas dimensions
canvas.width = 1500;
canvas.height = 600;

// Game loop
function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Example: Draw a rectangle
  ctx.fillStyle = 'white';
  ctx.fillRect(100, 100, 50, 50);

  requestAnimationFrame(gameLoop);
}

gameLoop();
 

