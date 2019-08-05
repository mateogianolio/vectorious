import { Matrix } from './';

Matrix.square = <T extends Matrix>(x: T): void => {
  x.square();
};

Matrix.prototype.square = function<T extends Matrix>(this: T): void {
  const { length } = this.shape;
  const [r, c] = this.shape;

  if (length !== 2 || r !== c) {
    throw new Error('matrix is not square');
  }
};
