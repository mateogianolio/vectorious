import { bench } from '../bench';
import { NDArray } from './';

const { random } = Math;
const r: (n: number) => NDArray = (n: number): NDArray =>
  new NDArray(new Float32Array(n)).fill(random);

bench(
  'NDArray',
  'copy',
  (n: number): [NDArray] => [r(n)],
  (x: NDArray): void => {
    x.copy();
  }
);

bench(
  'NDArray',
  'scale',
  (n: number): [NDArray, number] => [r(n), random()],
  (x: NDArray, alpha: number) => {
    x.scale(alpha);
  }
);

bench(
  'NDArray',
  'add',
  (n: number): [NDArray, NDArray] => [r(n), r(n)],
  (x: NDArray, y: NDArray): void => {
    x.add(y);
  }
);

bench(
  'NDArray',
  'subtract',
  (n: number): [NDArray, NDArray] => [r(n), r(n)],
  (x: NDArray, y: NDArray): void => {
    x.subtract(y);
  }
);

bench(
  'NDArray',
  'product',
  (n: number): [NDArray, NDArray] => [r(n), r(n)],
  (x: NDArray, y: NDArray): void => {
    x.product(y);
  }
);

bench(
  'NDArray',
  'dot',
  (n: number): [NDArray, NDArray] => [r(n), r(n)],
  (x: NDArray, y: NDArray): void => {
    x.dot(y);
  }
);

bench(
  'NDArray',
  'magnitude',
  (n: number): [NDArray] => [r(n)],
  (x: NDArray): void => {
    x.magnitude();
  }
);

bench(
  'NDArray',
  'max',
  (n: number): [NDArray] => [r(n)],
  (x: NDArray): void => {
    x.max();
  }
);

bench(
  'NDArray',
  'min',
  (n: number): [NDArray] => [r(n)],
  (x: NDArray): void => {
    x.min();
  }
);
