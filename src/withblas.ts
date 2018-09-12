import Vector from './vector';
import Matrix from './matrix';
import nblas from 'nblas';
import applyBlasOptimizations from './applyBlasOptimizations';

applyBlasOptimizations(Vector, Matrix, nblas);

export {
  Vector,
  Matrix,
  nblas as BLAS
};
