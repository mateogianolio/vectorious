import v = require('..');
import { bench } from '../bench';

const { floor, random, sqrt } = Math;
const r: (n: number) => v = (n: number): v => v.random(floor(sqrt(n)), floor(sqrt(n)));

bench(
  'v',
  'swap',
  (n: number): [v, number, number] => [r(n), floor(random() * sqrt(n)), floor(random() * sqrt(n))],
  (x: v, i: number, j: number): void => {
    x.swap(i, j);
  },
  (x: v, i: number, j: number): void => {
    v.swap(x, i, j);
  }
);
