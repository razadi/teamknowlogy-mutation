
function reverseStr(strValue) {
  return strValue.split('').reverse().join('');
};

function reverseMatrix(matrixValue) {
  return matrixValue.map((value) => {
    return reverseStr(value);
  });
};

const validaArray = (array) => {
  array.forEach(element => {
    if (array.length !== element.length) {
      throw Error(`Error: el ADN debe ser una matriz de NxN`);
    }
  });
};

const rightDiagonal = (value) => {
  let arrayTmp;
  let newArray = [];

  // barro de izquierda a derecha y de arriba hacia abajo
  for (let i = 0; i < value.length; i++) {
    arrayTmp = [];
	  for(let j = i, k = 0; j >= 0; j--, k++) {
		  arrayTmp.push(value[j][k]);
    }    
    newArray.push(arrayTmp);
  }

  // barro de abajo hacia arriba y de izquierda a derecha
  for (let i = 1; i < value[0].length; i++) {
	  arrayTmp = [];
	  for(let j = value.length - 1, k = i; k < value[0].length; j--, k++) {
		  arrayTmp.push(value[j][k]);
    }
    newArray.push(arrayTmp);
	}

  const result = newArray.map((item) => {
    return item.join('');
  });

	return result;
};

const leftDiagonal = (value) => {
  // cambio la matrix y busco sus diagonales
  let reverse = reverseMatrix(value);
  return rightDiagonal(reverse);
};

module.exports = {
  validaArray,
  rightDiagonal,
  leftDiagonal
};