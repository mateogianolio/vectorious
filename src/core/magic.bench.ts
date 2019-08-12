import v = require('..');
import { bench } from '../bench';

bench(
  'v',
  'magic',
  (n: number): [number] => [n],
  (n: number): void => {
    v.magic(n);
  }
);
