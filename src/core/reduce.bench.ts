import v = require('..');
import { bench } from '../bench';

bench(
  'v',
  'reduce',
  (n: number): [v] => [v.random(n)],
  (x: v): void => {
    x.reduce((value: number) => value);
  },
  (x: v): void => {
    v.reduce(x, (value: number) => value);
  }
);
