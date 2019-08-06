import { bench } from '../bench';

import { Matrix } from './';

const { floor, random, sqrt } = Math;
const r: (n: number) => Matrix = (n: number): Matrix => Matrix.random(floor(sqrt(n)), floor(sqrt(n)));

bench(
  'Matrix',
  'swap',
  (n: number): [Matrix, number, number] => [r(n), floor(random() * sqrt(n)), floor(random() * sqrt(n))],
  (x: Matrix, i: number, j: number): void => {
    x.swap(i, j);
  },
  (x: Matrix, i: number, j: number): void => {
    Matrix.swap(x, i, j);
  }
);
