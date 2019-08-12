import v = require('..');
import { bench } from '../bench';

const { random } = Math;
const r: (n: number) => v = (n: number): v =>
  v.array(new Float32Array(n)).fill(random);

bench(
  'v',
  'floor',
  (n: number): [v] => [r(n)],
  (x: v): void => {
    x.floor();
  },
  (x: v): void => {
    v.floor(x);
  }
);
