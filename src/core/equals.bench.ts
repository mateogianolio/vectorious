import v = require('..');
import { bench } from '../bench';

const { random } = Math;
const r: (n: number) => v = (n: number): v =>
  v.array(new Float32Array(n)).fill(random);

bench(
  'v',
  'equals',
  (n: number): [v, v] => [r(n), r(n)],
  (x: v, y: v): void => {
    x.equals(y);
  },
  (x: v, y: v): void => {
    v.equals(x, y);
  }
);
