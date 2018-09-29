import Vector from './Vector';
import Matrix from './Matrix';
import nblas from 'nblas';
import applyBlasOptimizations from './applyBlasOptimizations';

applyBlasOptimizations(Vector, Matrix, nblas);

export {
  Vector,
  Matrix,
  nblas as BLAS
};
