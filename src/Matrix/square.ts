import { IMatrix } from '../types';

/**
 * Asserts if current matrix is square.
 */
export function square<T extends IMatrix>(this: T): void {
  const { length } = this.shape;
  const [r, c] = this.shape;

  if (length !== 2 || r !== c) {
    throw new Error('matrix is not square');
  }
}
