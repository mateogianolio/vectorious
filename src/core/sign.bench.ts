import v = require('..');
import { bench } from '../bench';

const { random } = Math;
const r: (n: number) => v = (n: number): v =>
  v.array(new Float32Array(n)).fill(random);

bench(
  'v',
  'sign',
  (n: number): [v] => [r(n)],
  (x: v): void => {
    x.sign();
  },
  (x: v): void => {
    v.sign(x);
  }
);
