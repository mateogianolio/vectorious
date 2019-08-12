import v = require('..');
import { bench } from '../bench';

bench(
  'v',
  'matrix',
  (n: number): [number] => [n],
  (n: number): void => {
    v.matrix(n, n);
  }
);
