import v = require('..');
import { bench } from '../bench';

const { random } = Math;
const r: (n: number) => v = (n: number): v =>
  v.array(new Float32Array(n)).fill(random);

bench(
  'v',
  'pow',
  (n: number): [v, number] => [r(n), random()],
  (x: v, exponent: number): void => {
    x.pow(exponent);
  },
  (x: v, exponent: number): void => {
    v.pow(x, exponent);
  }
);
