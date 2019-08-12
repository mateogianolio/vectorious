import v = require('..');
import { bench } from '../bench';

const { floor, random, sqrt } = Math;

bench(
  'v',
  'swap',
  (n: number): [v, number, number] => [v.random(n), floor(random() * sqrt(n)), floor(random() * sqrt(n))],
  (x: v, i: number, j: number): void => {
    x.swap(i, j);
  },
  (x: v, i: number, j: number): void => {
    v.swap(x, i, j);
  }
);
