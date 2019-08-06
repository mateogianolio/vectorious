import { bench } from '../bench';

import { Matrix } from './';

const { floor, sqrt } = Math;
const r: (n: number) => Matrix = (n: number): Matrix => Matrix.random(floor(sqrt(n)), floor(sqrt(n)));

bench(
  'Matrix',
  'gauss',
  (n: number): [Matrix] => [r(n)],
  (x: Matrix): void => {
    x.gauss();
  },
  (x: Matrix): void => {
    Matrix.gauss(x);
  }
);
