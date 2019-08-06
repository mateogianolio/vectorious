import { bench } from '../bench';

import { Vector } from './';

const r: (n: number) => Vector = (n: number): Vector => Vector.random(n);

bench(
  'Vector',
  'cross',
  (): [Vector, Vector] => [r(3), r(3)],
  (x: Vector, y: Vector): void => {
    x.cross(y);
  },
  (x: Vector, y: Vector): void => {
    Vector.cross(x, y);
  }
);
