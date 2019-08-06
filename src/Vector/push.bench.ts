import { bench } from '../bench';

import { Vector } from './';

const { random } = Math;
const r: (n: number) => Vector = (n: number): Vector => Vector.random(n);

bench(
  'Vector',
  'push',
  (n: number): [Vector, number] => [r(n), random()],
  (x: Vector, value: number): void => {
    x.push(value);
  },
  (x: Vector, value: number): void => {
    Vector.push(x, value);
  }
);
