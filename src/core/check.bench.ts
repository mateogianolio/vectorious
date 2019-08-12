import v = require('..');
import { bench } from '../bench';

const { random, floor } = Math;
const r: (n: number) => v = (n: number): v =>
  v.array(new Float32Array(n)).fill(random);

bench(
  'v',
  'check',
  (n: number): [v, number] => [r(n), floor(random() * n)],
  (x: v, i: number): void => {
    x.check(i);
  },
  (x: v, i: number): void => {
    v.check(x, i);
  }
);
