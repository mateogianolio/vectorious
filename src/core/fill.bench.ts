import v = require('..');
import { bench } from '../bench';

const { random } = Math;
const r: (n: number) => v = (n: number): v =>
  v.array(new Float32Array(n)).fill(random);

bench(
  'v',
  'fill',
  (n: number): [v, number] => [r(n), random()],
  (x: v, value: number) => {
    x.fill(value);
  },
  (x: v, value: number) => {
    v.fill(x, value);
  }
);
