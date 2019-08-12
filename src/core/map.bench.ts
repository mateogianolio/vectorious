import v = require('..');
import { bench } from '../bench';

const { random } = Math;
const r: (n: number) => v = (n: number): v =>
  v.array(new Float32Array(n)).fill(random);

bench(
  'v',
  'map',
  (n: number): [v] => [r(n)],
  (x: v): void => {
    x.map((value: number) => value);
  },
  (x: v): void => {
    v.map(x, (value: number) => value);
  }
);
