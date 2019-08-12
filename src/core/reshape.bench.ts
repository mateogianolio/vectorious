import v = require('..');
import { bench } from '../bench';

const { random } = Math;
const r: (n: number) => v = (n: number): v =>
  v.array(new Float32Array(n)).fill(random);

bench(
  'v',
  'reshape',
  (n: number): [v, number] => [r(n), n],
  (x: v, n: number): void => {
    x.reshape(n);
  },
  (x: v, n: number): void => {
    v.reshape(x, n);
  }
);
