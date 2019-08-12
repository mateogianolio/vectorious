import v = require('..');
import { bench } from '../bench';

const { random, floor } = Math;
const r: (n: number) => v = (n: number): v =>
  v.array(new Float32Array(n)).fill(random);
bench(
  'v',
  'copy',
  (n: number): [v, number, number, number] => [v.random(n), 0, floor(random() * n), n],
  (x: v, start: number, step: number, end: number): void => {
    x.slice(start, step, end);
  },
  (x: v, start: number, step: number, end: number): void => {
    v.slice(x, start, step, end);
  }
);
