import v = require('..');
import { bench } from '../bench';

bench(
  'v',
  'ones',
  (n: number): [number] => [n],
  (n: number): void => {
    v.ones(n);
  }
);
