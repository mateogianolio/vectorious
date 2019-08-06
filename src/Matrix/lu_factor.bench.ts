import { bench } from '../bench';

import { Matrix } from './';

const { floor, sqrt } = Math;
const r: (n: number) => Matrix = (n: number): Matrix => Matrix.random(floor(sqrt(n)), floor(sqrt(n)));

bench(
  'Matrix',
  'lu_factor',
  (n: number): [Matrix] => [r(n)],
  (x: Matrix): void => {
    x.lu_factor();
  },
  (x: Matrix): void => {
    Matrix.lu_factor(x);
  }
);
