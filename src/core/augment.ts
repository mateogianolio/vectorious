import { NDArray } from './';

NDArray.augment = <T extends NDArray>(x: T, y: T): T => x.copy().augment(y);

NDArray.prototype.augment = function<T extends NDArray>(this: T, x: T): T {
  const [r1, c1] = this.shape;
  const [r2, c2] = x.shape;
  const { data: d1 } = this;
  const { data: d2 } = x;

  if (r2 === 0 || c2 === 0) {
    return this;
  }

  if (r1 !== r2) {
    throw new Error('rows do not match');
  }

  const y: T = NDArray.zeros(r1, c1 + c2);
  const { data: d3 } = y;

  let i: number;
  let j: number;
  for (i = 0; i < r1; i += 1) {
    for (j = 0; j < c1; j += 1) {
      d3[i * (c1 + c2) + j] = d1[i * c1 + j];
    }
  }

  for (i = 0; i < r2; i += 1) {
    for (j = 0; j < c2; j += 1) {
      d3[i * (c1 + c2) + (j + c1)] = d2[i * c2 + j];
    }
  }

  return y;
};
