import v = require('..');
import { bench } from '../bench';

bench(
  'v',
  'each',
  (n: number): [v] => [v.random(n)],
  (x: v): void => {
    x.each((value: number) => value);
  },
  (x: v): void => {
    v.each(x, (value: number) => value);
  }
);
