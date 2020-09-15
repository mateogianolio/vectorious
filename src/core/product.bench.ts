import { product } from './product';
import { random } from './random';
import { bench } from '../bench';

bench(
  'NDArray',
  'product',
  (n: number) => [random(n), random(n)],
  (x, y): void => {
    x.product(y);
  },
  (x, y): void => {
    product(x, y);
  }
);
