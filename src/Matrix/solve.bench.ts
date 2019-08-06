import { bench } from '../bench';

import { Matrix } from './';

const { floor, sqrt } = Math;
const r: (n: number) => Matrix = (n: number): Matrix => Matrix.random(floor(sqrt(n)), floor(sqrt(n)));
const rhs: (n: number) => Matrix = (n: number): Matrix => Matrix.random(floor(sqrt(n)), 1);

bench(
  'Matrix',
  'solve',
  (n: number): [Matrix, Matrix] => [r(n), rhs(n)],
  (x: Matrix, y: Matrix): void => {
    x.solve(y);
  },
  (x: Matrix, y: Matrix): void => {
    Matrix.solve(x, y);
  }
);
