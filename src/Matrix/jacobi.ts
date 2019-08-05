import { Matrix } from './';

/**
 *  ┌   ┐    ┌     ┐┌   ┐
 *  │Skl│    │c  −s││Skl│
 *  │   │ := │     ││   │
 *  │Sij│    │s   c││Sij│
 *  └   ┘    └     ┘└   ┘
 */
const rotate:
  <T extends Matrix>(x: T, c: number, s: number, k: number, l: number, i: number, j: number) => void =
  <T extends Matrix>(x: T, c: number, s: number, k: number, l: number, i: number, j: number): void => {
    const temp: number = x.get(k, l);
    const tau: number = 1 / (c + s);

    x.set(k, l, temp - s * (x.get(i, j) + tau * temp));
    x.set(i, j, x.get(i, j) + s * (temp - tau * x.get(i, j)));
  };

/**
 * Gets eigenvalues and eigenvectors of `x` using the Jacobi method
 */
Matrix.jacobi = <T extends Matrix>(x: T): [T, T] => x.copy().jacobi();

/**
 * Gets eigenvalues and eigenvectors of the current matrix using the Jacobi method
 */
Matrix.prototype.jacobi = function<T extends Matrix>(this: T): [T, T] {
  this.square();

  const [n] = this.shape;
  const p: T = Matrix.eye(n);

  let max: number = 0;
  let i: number = 0;
  let j: number = 0;
  let k: number = 0;
  let l: number = 0;

  do {
    // Find maximum off-diagonal element
    for (i = 0; i < n; i += 1) {
      for (j = i + 1; j < n; j += 1) {
        if (Math.abs(this.get(i, j)) >= max) {
          max = Math.abs(this.get(i, j));
          k = i;
          l = j;
        }
      }
    }

    // Find c and s
    let t: number;
    if (Math.abs(this.get(k, l)) < Math.abs(this.get(l, l)) * 1e-36) {
      t = this.get(k, l) / this.get(l, l);
    } else {
      const phi: number = this.get(l, l) / 2 * this.get(k, l);
      t = 1 / (Math.abs(phi) + Math.sqrt(phi * phi + 1));
    }

    const c: number = 1 / Math.sqrt(t * t + 1);
    const s: number = t * c;

    const e: number = this.get(k, l);
    this.set(k, l, 0);
    this.set(k, k, this.get(k, k) - t * e);
    this.set(l, l, this.get(l, l) + t * e);

    // Rotate rows and columns k and l
    for (i = 0; i < k; i += 1) {
      rotate(this, c, s, i, k, i, l);
    }

    for (i = k + 1; i < l; i += 1) {
      rotate(this, c, s, k, i, i, l);
    }

    for (i = l + 1; i < n; i += 1) {
      rotate(this, c, s, k, i, l, i);
    }

    // Rotate eigenvectors
    for (i = 0; i < n; i += 1) {
      rotate(p, c, s, i, k, i, l);
    }
  } while (max >= 1e-9);

  return [this.diagonal(), p];
};
