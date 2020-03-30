import { NDArray } from './';
import { NDIter } from '../iterator';

NDArray.fill = <T extends NDArray>(
  x: T | ArrayLike<any>,
  value: number | ((index: number) => number) = 0
): T =>
  NDArray.array<T>(x).fill(value);

NDArray.prototype.fill = function<T extends NDArray>(this: T, value: number | ((index: number) => number) = 0): T {
  const { data: d1 } = this;
  const iter = new NDIter(this);

  do {
    d1[iter.pos] = value instanceof Function ? value(iter.pos) : value;

    iter.next();
  } while (!iter.done());

  return this;
};
