import v = require('..');
import { bench } from '../bench';
bench(
  'v',
  'eye',
  (n: number): [number] => [n],
  (n: number): void => {
    v.eye(n);
  }
);
