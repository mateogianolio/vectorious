import v = require('..');
import { bench } from '../bench';

const { random } = Math;
const r: (n: number) => v = (n: number): v =>
  v.array(new Float32Array(n)).fill(random);

bench(
  'v',
  'log10',
  (n: number): [v] => [r(n)],
  (x: v): void => {
    x.log10();
  },
  (x: v): void => {
    v.log10(x);
  }
);
