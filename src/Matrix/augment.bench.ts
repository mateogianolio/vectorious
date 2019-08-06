import { bench } from '../bench';

import { Matrix } from './';

const { floor, sqrt } = Math;
const r: (n: number) => Matrix = (n: number): Matrix => Matrix.random(floor(sqrt(n)), floor(sqrt(n)));

bench(
  'Matrix',
  'augment',
  (n: number): [Matrix, Matrix] => [r(n), r(n)],
  (x: Matrix, y: Matrix): void => {
    x.augment(y);
  },
  (x: Matrix, y: Matrix): void => {
    Matrix.augment(x, y);
  }
);
