import v = require('..');
import { bench } from '../bench';

bench(
  'v',
  'map',
  (n: number): [v] => [v.random(n)],
  (x: v): void => {
    x.map((value: number) => value);
  },
  (x: v): void => {
    v.map(x, (value: number) => value);
  }
);
