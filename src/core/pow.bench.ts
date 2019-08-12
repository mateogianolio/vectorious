import v = require('..');
import { bench } from '../bench';

bench(
  'v',
  'pow',
  (n: number): [v, number] => [v.random(n), Math.random()],
  (x: v, exponent: number): void => {
    x.pow(exponent);
  },
  (x: v, exponent: number): void => {
    v.pow(x, exponent);
  }
);
