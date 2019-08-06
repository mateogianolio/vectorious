import { bench } from '../bench';

import { Vector } from './';

const r: (n: number) => Vector = (n: number): Vector => Vector.random(n);

bench(
  'Vector',
  'combine',
  (n: number): [Vector, Vector] => [r(n), r(n)],
  (x: Vector, y: Vector): void => {
    x.combine(y);
  },
  (x: Vector, y: Vector): void => {
    Vector.combine(x, y);
  }
);
