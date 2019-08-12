import v = require('..');
import { bench } from '../bench';

const { random } = Math;
const r: (n: number) => v = (n: number): v =>
  v.array(new Float32Array(n)).fill(random);

bench(
  'v',
  'subtract',
  (n: number): [v, v] => [r(n), r(n)],
  (x: v, y: v): void => {
    x.subtract(y);
  },
  (x: v, y: v): void => {
    v.subtract(x, y);
  }
);
