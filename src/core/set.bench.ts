import v = require('..');
import { bench } from '../bench';

const { random, floor } = Math;
const r: (n: number) => v = (n: number): v =>
  v.array(new Float32Array(n)).fill(random);

bench(
  'v',
  'set',
  (n: number): [v, number, number] => [r(n), floor(random() * n),  random()],
  (x: v, i: number, alpha: number) => {
    x.set(i, alpha);
  },
  (x: v, i: number, alpha: number) => {
    v.set(x, i, alpha);
  }
);
