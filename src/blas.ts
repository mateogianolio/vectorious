import {
  TypedArray,
  DType,
} from './types';

let nblas: any;
try {
  nblas = require('nblas');
} catch (err) {}

export const NoTrans = nblas.NoTrans;
export const Trans = nblas.Trans;

export function axpy(dtype: DType, n: number, alpha: number, x: TypedArray, inc_x: number, y: TypedArray, inc_y: number) {
  if (x.length / inc_x !== n || y.length / inc_y !== n) {
    throw new Error('lengths do not match');
  }

  switch (dtype) {
    case 'float64':
      return nblas.daxpy(n, alpha, x, inc_x, y, inc_y);
    case 'float32':
      return nblas.saxpy(n, alpha, x, inc_x, y, inc_y);
    default:
      throw new Error('wrong dtype');
  }
}

export function dot(dtype: DType, n: number, x: TypedArray, inc_x: number, y: TypedArray, inc_y: number) {
  if (x.length / inc_x !== n || y.length / inc_y !== n) {
    throw new Error('lengths do not match');
  }

  switch (dtype) {
    case 'float64':
      return nblas.ddot(n, x, inc_x, y, inc_y);
    case 'float32':
      return nblas.sdot(n, x, inc_x, y, inc_y);
    default:
      throw new Error('wrong dtype');
  }
}

export function iamax(dtype: DType, n: number, x: TypedArray, inc_x: number) {
  if (x.length / inc_x !== n) {
    throw new Error('lengths do not match');
  }

  switch (dtype) {
    case 'float64':
      return nblas.idamax(n, x, inc_x);
    case 'float32':
      return nblas.isamax(n, x, inc_x);
    default:
      throw new Error('wrong dtype');
  }
}

export function gemm(dtype: DType, transx: number, transy: number, m: number, n: number, k: number, alpha: number, x: TypedArray, ldx: number, y: TypedArray, ldy: number, beta: number, z: TypedArray, ldz: number) {
  const { length: l1 } = x;
  const { length: l2 } = y;
  const { length: l3 } = z;

  if ((transx === nblas.NoTrans && l1 !== ldx * m) || (transx === nblas.Trans && l1 !== ldx * k)) {
    throw new Error('lengths do not match');
  }

  if ((transy === nblas.NoTrans && l2 !== ldy * k) || (transy === nblas.Trans && l2 !== ldy * n)) {
    throw new Error('lengths do not match');
  }

  if (l3 !== ldz * m) {
    throw new Error('lengths do not match');
  }

  switch (dtype) {
    case 'float64':
      return nblas.dgemm(transx, transy, m, n, k, alpha, x, ldx, y, ldy, beta, z, ldz);
    case 'float32':
      return nblas.sgemm(transx, transy, m, n, k, alpha, x, ldx, y, ldy, beta, z, ldz);
    default:
      throw new Error('wrong dtype');
  }
}

export function nrm2(dtype: DType, n: number, x: TypedArray, inc_x: number) {
  if (x.length / inc_x !== n) {
    throw new Error('lengths do not match');
  }

  switch (dtype) {
    case 'float64':
      return nblas.dnrm2(n, x, inc_x);
    case 'float32':
      return nblas.snrm2(n, x, inc_x);
    default:
      throw new Error('wrong dtype');
  }
}

export function scal(dtype: DType, n: number, alpha: number, x: TypedArray, inc_x: number) {
  if (x.length / inc_x !== n) {
    throw new Error('lengths do not match');
  }

  switch (dtype) {
    case 'float64':
      return nblas.dscal(n, alpha, x, inc_x);
    case 'float32':
      return nblas.sscal(n, alpha, x, inc_x);
    default:
      throw new Error('wrong dtype');
  }
}
