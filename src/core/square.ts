import { NDArray } from './';

NDArray.square = <T extends NDArray>(x: T): void => {
  x.square();
};

NDArray.prototype.square = function<T extends NDArray>(this: T): void {
  const { length } = this.shape;
  const [r, c] = this.shape;

  if (length !== 2 || r !== c) {
    throw new Error('matrix is not square');
  }
};
