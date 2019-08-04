import { Matrix } from './';

/**
 * Performs LU factorization on `x`.
 */
Matrix.plu = <T extends Matrix>(x: T): [T, Int32Array] => x.copy().plu();

/**
 * Performs LU factorization on current matrix.
 */
Matrix.prototype.plu = function<T extends Matrix>(this: T): [T, Int32Array] {
  const { data: d1 } = this;
  const [n] = this.shape;
  const ipiv: Int32Array = new Int32Array(n);

  let max: number;
  let abs: number;
  let diag: number;
  let p: number;

  let i: number;
  let j: number;
  let k: number;
  for (k = 0; k < n; k += 1) {
    p = k;
    max = Math.abs(d1[k * n + k]);
    for (j = k + 1; j < n; j += 1) {
      abs = Math.abs(d1[j * n + k]);
      if (max < abs) {
        max = abs;
        p = j;
      }
    }

    ipiv[k] = p;

    if (p !== k) {
      this.swap(k, p);
    }

    diag = d1[k * n + k];
    for (i = k + 1; i < n; i += 1) {
      d1[i * n + k] /= diag;
    }

    for (i = k + 1; i < n; i += 1) {
      for (j = k + 1; j < n - 1; j += 1) {
        d1[i * n + j] -= d1[i * n + k] * d1[k * n + j];
        j += 1;
        d1[i * n + j] -= d1[i * n + k] * d1[k * n + j];
      }

      if (j === n - 1) {
        d1[i * n + j] -= d1[i * n + k] * d1[k * n + j];
      }
    }
  }

  return [this, ipiv];
};
