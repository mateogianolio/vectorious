import v = require('..');
import { bench } from '../bench';

const { random } = Math;
const r: (n: number) => v = (n: number): v =>
  v.array(new Float32Array(n)).fill(random);

bench(
  'v',
  'sin',
  (n: number): [v] => [r(n)],
  (x: v): void => {
    x.sin();
  },
  (x: v): void => {
    v.sin(x);
  }
);
