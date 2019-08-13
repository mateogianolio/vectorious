import v = require('..');
import { bench } from '../bench';

bench(
  'v',
  'forEach',
  (n: number): [v] => [v.random(n)],
  (x: v): void => {
    x.forEach((value: number) => value);
  },
  (x: v): void => {
    v.forEach(x, (value: number) => value);
  }
);
