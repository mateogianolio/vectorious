import v = require('..');
import { bench } from '../bench';

const { random } = Math;
const r: (n: number) => v = (n: number): v =>
  v.array(new Float32Array(n)).fill(random);

bench(
  'v',
  'product',
  (n: number): [v, v] => [r(n), r(n)],
  (x: v, y: v): void => {
    x.product(y);
  },
  (x: v, y: v): void => {
    v.product(x, y);
  }
);
