import { bench } from '../bench';

import { Matrix } from './';

const { floor, sqrt } = Math;
const r: (n: number) => Matrix = (n: number): Matrix => Matrix.random(floor(sqrt(n)), floor(sqrt(n)));

bench(
  'Matrix',
  'square',
  (n: number): [Matrix] => [r(n)],
  (x: Matrix): void => {
    x.square();
  },
  (x: Matrix): void => {
    Matrix.square(x);
  }
);
