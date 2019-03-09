import NDArray from './NDArray';
import { bench } from './util';

const r = (n: number): NDArray =>
  new NDArray(new Float64Array(n)).fill(Math.random);

bench(
  'NDArray.copy',
  (x: NDArray): void => {
    x.copy();
  },
  (n: number): [NDArray] => [r(n)]
);

bench(
  'NDArray.scale',
  (x: NDArray, alpha: number) => {
    x.scale(alpha);
  },
  (n: number): [NDArray, number] => [r(n), Math.random()]
);

bench(
  'NDArray.add',
  (x: NDArray, y: NDArray): void => {
    x.add(y);
  },
  (n: number): [NDArray, NDArray] => [r(n), r(n)]
);

bench(
  'NDArray.subtract',
  (x: NDArray, y: NDArray): void => {
    x.subtract(y);
  },
  (n: number): [NDArray, NDArray] => [r(n), r(n)]
);

bench(
  'NDArray.product',
  (x: NDArray, y: NDArray): void => {
    x.product(y);
  },
  (n: number): [NDArray, NDArray] => [r(n), r(n)]
);

bench(
  'NDArray.dot',
  (x: NDArray, y: NDArray): void => {
    x.dot(y);
  },
  (n: number): [NDArray, NDArray] => [r(n), r(n)]
);

bench(
  'NDArray.magnitude',
  (x: NDArray): void => {
    x.magnitude();
  },
  (n: number): [NDArray] => [r(n)]
);

bench(
  'NDArray.max',
  (x: NDArray): void => {
    x.max();
  },
  (n: number): [NDArray] => [r(n)]
);

bench(
  'NDArray.min',
  (x: NDArray): void => {
    x.min();
  },
  (n: number): [NDArray] => [r(n)]
);
