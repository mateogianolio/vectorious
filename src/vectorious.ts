declare function require(moduleName: string): any;

import Vector from './Vector';
import Matrix from './Matrix';
export { nblas as BLAS } from 'nblas';

try {
  var nblas = require('nblas'),
      applyBlasOptimizations = require('./applyBlasOptimizations');
  
  applyBlasOptimizations(Vector, Matrix, nblas);
} catch (error) {}

export {
  Vector,
  Matrix
};
