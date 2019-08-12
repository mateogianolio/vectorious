import v = require('..');
import { bench } from '../bench';

bench(
  'v',
  'sin',
  (n: number): [v] => [v.random(n)],
  (x: v): void => {
    x.sin();
  },
  (x: v): void => {
    v.sin(x);
  }
);
