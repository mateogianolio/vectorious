var vectorious = require('../../vectorious');

var Vector = vectorious.Vector;
var Matrix = vectorious.Matrix;

var arr_cube = [
    [0, 0, 0],
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
    [0, 1, 1],
    [1, 1, 0],
    [1, 0, 1],
    [1, 1, 1]
];

var matrix_cube = new Matrix(arr_cube);
matrix_cube = matrix_cube.scale(5);

console.log('matrix_cube:\n', matrix_cube.toString());
