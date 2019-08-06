import { Matrix } from './';

/**
 * Gauss-Jordan elimination (i.e. returns the reduced row echelon form) of `x`.
 */
Matrix.gauss = <T extends Matrix>(x: T): T => x.copy().gauss();

/**
 * Gauss-Jordan elimination (i.e. returns the reduced row echelon form) of the current matrix.
 */
Matrix.prototype.gauss = function<T extends Matrix>(this: T): T {
  const [r, c] = this.shape;

  let lead: number = 0;
  let leadValue: number;
  let pivot: number;

  let i: number;
  let j: number;
  let k: number;
  for (i = 0; i < r; i += 1) {
    if (c <= lead) {
      return this;
    }

    j = i;
    while (this.get(j, lead) === 0) {
      j += 1;
      if (r === j) {
        j = i;
        lead += 1;

        if (c === lead) {
          return this;
        }
      }
    }

    if (i !== j) {
      this.swap(i, j);
    }

    pivot = this.get(i, lead);
    if (pivot !== 0) {
      for (k = 0; k < c; k += 1) {
        this.set(i, k, this.get(i, k) / pivot);
      }
    }

    for (j = 0; j < r; j += 1) {
      leadValue = this.get(j, lead);
      if (j !== i) {
        for (k = 0; k < c; k += 1) {
          this.set(j, k, this.get(j, k) - this.get(i, k) * leadValue);
        }
      }
    }

    lead += 1;
  }

  for (i = 0; i < r; i += 1) {
    pivot = 0;
    for (j = 0; j < c; j += 1) {
      if (pivot === 0) {
        pivot = this.get(i, j);
      }
    }

    if (pivot === 0) {
      for (k = 0; k < c; k += 1) {
        this.set(i, k, this.get(i, k) / pivot);
      }
    }
  }

  return this;
};
