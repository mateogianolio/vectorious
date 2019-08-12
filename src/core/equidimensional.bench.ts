import v = require('..');
import { bench } from '../bench';

const { random } = Math;
const r: (n: number) => v = (n: number): v =>
  v.array(new Float32Array(n)).fill(random);

bench(
  'v',
  'equidimensional',
  (n: number): [v, v] => [r(n), r(n)],
  (x: v, y: v): void => {
    x.equidimensional(y);
  },
  (x: v, y: v): void => {
    v.equidimensional(x, y);
  }
);
