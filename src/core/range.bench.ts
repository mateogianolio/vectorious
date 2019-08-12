import v = require('..');
import { bench } from '../bench';

bench(
  'v',
  'range',
  (n: number): [number, number] => [0, n],
  (start: number, end: number): void => {
    v.range(start, end);
  }
);
