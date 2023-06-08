import { NDIter } from './single';
import { random } from '../core/random';
import { bench } from '../bench';

bench(
  'iterators',
  'single',
  (n: number) => {
    const data = random(n * n);
    const strided = random(2 * n * n);
    strided.strides = [2];

    return [new NDIter(data), data, new NDIter(strided), strided];
  },
  (iter, x): void => {
    for (const i of iter) {
      x.data[i] + x.data[i];
    }
  },
  (_, __, iter, x): void => {
    for (const i of iter) {
      x.data[i] + x.data[i];
    }
  },
  (_, x): void => {
    for (let i = 0; i < x.length; i++) {
      x.data[i] + x.data[i];
    }
  }
);
