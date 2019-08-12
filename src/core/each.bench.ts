import v = require('..');
import { bench } from '../bench';

const { random } = Math;
const r: (n: number) => v = (n: number): v =>
  v.array(new Float32Array(n)).fill(random);

bench(
  'v',
  'each',
  (n: number): [v] => [r(n)],
  (x: v): void => {
    x.each((value: number) => value);
  },
  (x: v): void => {
    v.each(x, (value: number) => value);
  }
);
