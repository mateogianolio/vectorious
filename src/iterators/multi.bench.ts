import { NDMultiIter } from './multi';
import { random } from '../core/random';
import { bench } from '../bench';

bench(
  'iterators',
  'multi',
  (n: number) => [random(n), random(n)],
  (x, y): void => {
    const iter = new NDMultiIter(x, y);
    for (const [i, j] of iter) {
      x.data[i];
      y.data[j];
    }
  },
  (x, y): void => {
    for (let i = 0, j = 0; i < x.length, j < y.length; i++, j++) {
      x.data[i];
      y.data[j]
    }
  }
);
