import v = require('..');
import { bench } from '../bench';
bench(
  'v',
  'array',
  (n: number): [number] => [n],
  (n: number): void => {
    v.array(new Array(n));
  }
);
