import v = require('..');
import { bench } from '../bench';

const r: (n: number) => v = (n: number): v => v.random(n);
bench(
  'v',
  'toString',
  (n: number): [v] => [v.random(n)],
  (x: v): void => {
    x.toString();
  },
  (x: v): void => {
    v.toString(x);
  }
);
