import { bench } from '../bench';

import { Vector } from './';

const r: (n: number) => Vector = (n: number): Vector => Vector.random(n);

bench(
  'Vector',
  'toArray',
  (n: number): [Vector] => [r(n)],
  (x: Vector): void => {
    x.toArray();
  },
  (x: Vector): void => {
    Vector.toArray(x);
  }
);
