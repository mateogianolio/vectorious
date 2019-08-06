import { bench } from '../bench';

import { Matrix } from './';

const { floor, random, sqrt } = Math;
const r: (n: number) => Matrix = (n: number): Matrix => Matrix.random(floor(sqrt(n)), floor(sqrt(n)));

bench(
  'Matrix',
  'rowAdd',
  (n: number): [Matrix, number, number] => [r(n), floor(random() * floor(sqrt(n))), floor(random() * floor(sqrt(n)))],
  (x: Matrix, dest: number, source: number): void => {
    x.rowAdd(dest, source);
  },
  (x: Matrix, dest: number, source: number): void => {
    Matrix.rowAdd(x, dest, source);
  }
);
