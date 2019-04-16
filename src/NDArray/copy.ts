import { INDArray } from '../types';

/**
 * Makes a copy of the class and underlying data
 */
export function copy<T extends INDArray>(this: T): T {
  const cp: T = Object.assign(Object.create(Object.getPrototypeOf(this)), this);

  cp.data = new this.type(this.data);
  cp.shape = this.shape;
  cp.length = this.length;
  cp.type = this.type;

  return cp;
}
