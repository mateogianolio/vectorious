import { NDArray } from './';
import { NDIter } from '../iterator';

const { sin } = Math;

NDArray.sin = <T extends NDArray>(x: T | ArrayLike<any>): T => NDArray.array<T>(x).sin();

NDArray.prototype.sin = function<T extends NDArray>(this: T): T {
  const { data: d1 } = this;
  const iter = new NDIter(this);

  do {
    d1[iter.pos] = sin(d1[iter.pos]);

    iter.next();
  } while (!iter.done());

  return this;
};
