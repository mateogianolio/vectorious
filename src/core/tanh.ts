import { NDArray } from './';
import { NDIter } from '../iterator';

const { tanh } = Math;

NDArray.tanh = <T extends NDArray>(x: T | ArrayLike<any>): T => NDArray.array<T>(x).tanh();

NDArray.prototype.tanh = function<T extends NDArray>(this: T): T {
  const { data: d1 } = this;
  const iter = new NDIter(this);

  do {
    d1[iter.pos] = tanh(d1[iter.pos]);

    iter.next();
  } while (!iter.done());

  return this;
};
