import v = require('..');
import { bench } from '../bench';

const { random } = Math;
const r: (n: number) => v = (n: number): v =>
  v.array(new Float32Array(n)).fill(random);

bench(
  'v',
  'log2',
  (n: number): [v] => [r(n)],
  (x: v): void => {
    x.log2();
  },
  (x: v): void => {
    v.log2(x);
  }
);
