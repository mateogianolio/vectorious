import { bench } from '../bench';

import { Vector } from './';

const r: (n: number) => Vector = (n: number): Vector => Vector.random(n);

bench(
  'Vector',
  'toString',
  (n: number): [Vector] => [r(n)],
  (x: Vector): void => {
    x.toString();
  },
  (x: Vector): void => {
    Vector.toString(x);
  }
);
