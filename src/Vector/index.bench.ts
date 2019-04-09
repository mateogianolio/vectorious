import { bench } from '../bench';
import { Vector } from './';

const { random } = Math;
const r: (n: number) => Vector = (n: number): Vector => Vector.random(n);

bench(
  'Vector',
  'binOp',
  (n: number): [Vector, Vector, (a: number, b: number) => number] =>
    [r(n), r(n), (a: number, b: number): number => a + b],
  (x: Vector, y: Vector, op: (a: number, b: number) => number): void => {
    x.binOp(y, op);
  },
  (x: Vector, y: Vector, op: (a: number, b: number) => number): void => {
    Vector.binOp(x, y, op);
  }
);

bench(
  'Vector',
  'add',
  (n: number): [Vector, Vector] => [r(n), r(n)],
  (x: Vector, y: Vector): void => {
    x.add(y);
  },
  (x: Vector, y: Vector): void => {
    Vector.add(x, y);
  }
);

bench(
  'Vector',
  'subtract',
  (n: number): [Vector, Vector] => [r(n), r(n)],
  (x: Vector, y: Vector): void => {
    x.subtract(y);
  },
  (x: Vector, y: Vector): void => {
    Vector.subtract(x, y);
  }
);

bench(
  'Vector',
  'scale',
  (n: number): [Vector, number] => [r(n), random()],
  (x: Vector, alpha: number): void => {
    x.scale(alpha);
  },
  (x: Vector, alpha: number): void => {
    Vector.scale(x, alpha);
  }
);

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

bench(
  'Vector',
  'dot',
  (n: number): [Vector, Vector] => [r(n), r(n)],
  (x: Vector, y: Vector): void => {
    x.dot(y);
  },
  (x: Vector, y: Vector): void => {
    Vector.dot(x, y);
  }
);

bench(
  'Vector',
  'angle',
  (n: number): [Vector, Vector] => [r(n), r(n)],
  (x: Vector, y: Vector): void => {
    x.angle(y);
  },
  (x: Vector, y: Vector): void => {
    Vector.angle(x, y);
  }
);

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
