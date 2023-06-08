import { NDMultiIter } from './multi';
import { random } from '../core/random';
import { bench } from '../bench';

bench(
  'iterators',
  'multi',
  (n: number) => {
    const x = random(n * n);
    const y = random(n * n);
    const stridedx = random(2 * n * n);
    const stridedy = random(2 * n * n);

    stridedx.strides = [2];
    stridedy.strides = [2];
    return [new NDMultiIter(x, y), x, y, new NDMultiIter(stridedx, stridedy), stridedx, stridedy];
  },
  (iter, x, y): void => {
    for (const [i, j] of iter) {
      x.data[i] + y.data[j];
    }
  },
  (_, __, ___, iter, x, y): void => {
    for (const [i, j] of iter) {
      x.data[i] + y.data[j];
    }
  },
  (_, x, y): void => {
    for (let i = 0, j = 0; i < x.length, j < y.length; i++, j++) {
      x.data[i] + y.data[j];
    }
  }
);
