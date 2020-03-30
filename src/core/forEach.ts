import { TypedArray } from '../types';

import { NDArray } from './';
import { NDIter } from '../iterator';

NDArray.forEach = <T extends NDArray>(
  x: T,
  f: (value: number, i: number, src: TypedArray) => void
): void => {
  x.forEach(f);
};

NDArray.prototype.forEach = function<T extends NDArray>(
  this: T,
  f: (value: number, i: number, src: TypedArray) => void
): void {
  const { data: d1 } = this;
  const iter = new NDIter(this);

  do {
    f.call(this, d1[iter.pos], iter.pos, d1);

    iter.next();
  } while (!iter.done());
};
