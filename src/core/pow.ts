import { NDArray } from './';
import { NDIter } from '../iterator';

const { pow } = Math;

NDArray.pow = <T extends NDArray>(x: T | ArrayLike<any>, exponent: number): T =>
  NDArray.array<T>(x).pow(exponent);

NDArray.prototype.pow = function<T extends NDArray>(this: T, exponent: number): T {
  const { data: d1 } = this;
  const iter = new NDIter(this);

  do {
    d1[iter.pos] = pow(d1[iter.pos], exponent);

    iter.next();
  } while (!iter.done());

  return this;
};
