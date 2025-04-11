const ROWS = 6;
const COLS = 7;

function generarGanadores() {
  const combinaciones = [];

  // Horizontales
  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col <= COLS - 4; col++) {
      combinaciones.push([
        [row, col],
        [row, col + 1],
        [row, col + 2],
        [row, col + 3],
      ]);
    }
  }

  // Verticales
  for (let row = 0; row <= ROWS - 4; row++) {
    for (let col = 0; col < COLS; col++) {
      combinaciones.push([
        [row, col],
        [row + 1, col],
        [row + 2, col],
        [row + 3, col],
      ]);
    }
  }

  // Diagonales 
  for (let row = 0; row <= ROWS - 4; row++) {
    for (let col = 0; col <= COLS - 4; col++) {
      combinaciones.push([
        [row, col],
        [row + 1, col + 1],
        [row + 2, col + 2],
        [row + 3, col + 3],
      ]);
    }
  }

  // Diagonales 
  for (let row = 0; row <= ROWS - 4; row++) {
    for (let col = 3; col < COLS; col++) {
      combinaciones.push([
        [row, col],
        [row + 1, col - 1],
        [row + 2, col - 2],
        [row + 3, col - 3],
      ]);
    }
  }

  return combinaciones;
}

const ganadores = generarGanadores();

export { ganadores };
