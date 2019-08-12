import v = require('..');
import { bench } from '../bench';
bench(
  'v',
  'zeros',
  (n: number): [number] => [n],
  (n: number): void => {
    v.zeros(n);
  }
);
