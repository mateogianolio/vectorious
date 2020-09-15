import {
  TypedArray,
  DType,
} from './types';

let nlapack: any;
try {
  nlapack = require('nlapack');
} catch (err) {}

export function getrf(dtype: DType, m: number, n: number, x: TypedArray, ldx: number, ipiv: Int32Array) {
  if (x.length !== m * n) {
    throw new Error('lengths do not match');
  }

  switch (dtype) {
    case 'float64':
      return nlapack.dgetrf(m, n, x, ldx, ipiv);
    case 'float32':
      return nlapack.sgetrf(m, n, x, ldx, ipiv);
    default:
      throw new Error('wrong dtype');
  }
}

export function getri(dtype: DType, n: number, x: TypedArray, ldx: number, ipiv: Int32Array) {
  if (x.length !== n * n) {
    throw new Error('lengths do not match');
  }

  switch (dtype) {
    case 'float64':
      return nlapack.dgetri(n, x, ldx, ipiv);
    case 'float32':
      return nlapack.sgetri(n, x, ldx, ipiv);
    default:
      throw new Error('wrong dtype');
  }
}

export function gesv(dtype: DType, n: number, nrhs: number, x: TypedArray, ldx: number, ipiv: Int32Array, y: TypedArray, ldy: number) {
  if (x.length !== ldx * n || y.length !== ldy * nrhs) {
    throw new Error('lengths do not match');
  }

  switch (dtype) {
    case 'float64':
      return nlapack.dgesv(n, nrhs, x, ldx, ipiv, y, ldy);
    case 'float32':
      return nlapack.sgesv(n, nrhs, x, ldx, ipiv, y, ldy);
    default:
      throw new Error('wrong dtype');
  }
}
