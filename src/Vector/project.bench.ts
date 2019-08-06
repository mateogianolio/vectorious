import { bench } from '../bench';

import { Vector } from './';

const r: (n: number) => Vector = (n: number): Vector => Vector.random(n);

bench(
  'Vector',
  'project',
  (n: number): [Vector, Vector] => [r(n), r(n)],
  (x: Vector, y: Vector): void => {
    x.project(y);
  },
  (x: Vector, y: Vector): void => {
    Vector.project(x, y);
  }
);
