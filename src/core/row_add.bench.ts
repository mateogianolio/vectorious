import v = require('..');
import { bench } from '../bench';

const { floor, random, sqrt } = Math;

bench(
  'v',
  'row_add',
  (n: number): [v, number, number] => [v.random(n), floor(random() * floor(sqrt(n))), floor(random() * floor(sqrt(n)))],
  (x: v, dest: number, source: number): void => {
    x.row_add(dest, source);
  },
  (x: v, dest: number, source: number): void => {
    v.row_add(x, dest, source);
  }
);
