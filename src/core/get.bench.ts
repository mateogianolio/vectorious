import v = require('..');
import { bench } from '../bench';

const { random, floor } = Math;
const r: (n: number) => v = (n: number): v =>
  v.array(new Float32Array(n)).fill(random);

bench(
  'v',
  'get',
  (n: number): [v, number] => [r(n), floor(random() * n)],
  (x: v, i: number) => {
    x.get(i);
  },
  (x: v, i: number) => {
    v.get(x, i);
  }
);
