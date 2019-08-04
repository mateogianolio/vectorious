import { Matrix } from './';

function maxElem<T extends Matrix>(x: T): [number, number, number] {
  const [n] = x.shape;

  let max: number = 0;
  let k: number = 0;
  let l: number = 0;

  let i: number;
  let j: number;
  for (i = 0; i < n; i += 1) {
    for (j = i + 1; j < n; j += 1) {
      if (Math.abs(x.get(i, j)) >= max) {
        max = Math.abs(x.get(i, j));
        k = i;
        l = j;
      }
    }
  }

  return [max, k, l];
}

function rotate<T extends Matrix>(x: T, p: T, i: number, j: number): void {
  const [n] = x.shape;
  const xDiff: number = x.get(j, j);

  let t: number;
  if (Math.abs(x.get(i, j)) < Math.abs(xDiff) * 1e-36) {
    t = x.get(i, j) / xDiff;
  } else {
    const phi: number = xDiff / 2 * x.get(i, j);
    t = 1 / (Math.abs(phi) + Math.sqrt(phi * phi + 1));
  }

  const c: number = 1 / Math.sqrt(t * t + 1);
  const s: number = t * c;
  const tau: number = s / (c + 1);

  let temp: number = x.get(i, j);
  x.set(i, j, 0);
  x.set(i, i, x.get(i, i) - t * temp);
  x.set(j, j, x.get(j, j) + t * temp);

  let k: number;
  for (k = 0; k < i; k += 1) {
    temp = x.get(k, i);
    x.set(k, i, temp - s * (x.get(k, j) + tau * temp));
    x.set(k, j, x.get(k, j) + s * (temp - tau * x.get(k, j)));
  }

  for (k = i + 1; k < j; k += 1) {
    temp = x.get(i, k);
    x.set(i, k, temp - s * (x.get(k, j) + tau * x.get(i, k)));
    x.set(k, j, x.get(k, j) + s * (temp - tau * x.get(k, j)));
  }

  for (k = j + 1; k < n; k += 1) {
    temp = x.get(i, k);
    x.set(i, k, temp - s * (x.get(j, k) + tau * temp));
    x.set(j, k, x.get(j, k) + s * (temp - tau * x.get(j, k)));
  }

  for (k = 0; k < n; k += 1) {
    temp = p.get(k, i);
    p.set(k, i, temp - s * (p.get(k, j) + tau * p.get(k, i)));
    p.set(k, j, p.get(k, j) + s * (temp - tau * p.get(k, j)));
  }
}

Matrix.jacobi = <T extends Matrix>(x: T): [T, T] => x.copy().jacobi();

Matrix.prototype.jacobi = function<T extends Matrix>(this: T): [T, T] {
  this.square();

  const [n] = this.shape;
  const maxRot: number = (n * n) * 5;
  const p: T = Matrix.eye(n);

  let i: number;
  for (i = 0; i < maxRot; i += 1) {
    const [max, j, k] = maxElem(this);
    if (max < 1e-9) {
      return [this.diagonal(), p];
    }
    rotate(this, p, j, k);
  }

  throw new Error('jacobi did not converge');
};
