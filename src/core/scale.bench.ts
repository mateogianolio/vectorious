import v = require('..');
import { bench } from '../bench';

const { random } = Math;
const r: (n: number) => v = (n: number): v =>
  v.array(new Float32Array(n)).fill(random);

bench(
  'v',
  'scale',
  (n: number): [v, number] => [r(n), random()],
  (x: v, alpha: number) => {
    x.scale(alpha);
  },
  (x: v, alpha: number) => {
    v.scale(x, alpha);
  }
);
