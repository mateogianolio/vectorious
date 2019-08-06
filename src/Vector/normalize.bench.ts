import { bench } from '../bench';

import { Vector } from './';

const r: (n: number) => Vector = (n: number): Vector => Vector.random(n);

bench(
  'Vector',
  'normalize',
  (n: number): [Vector] => [r(n)],
  (x: Vector): void => {
    x.normalize();
  },
  (x: Vector): void => {
    Vector.normalize(x);
  }
);
