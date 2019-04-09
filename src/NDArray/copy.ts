import { INDArray } from '../types';

/**
 * Makes a copy of the class and underlying data
 */
export default function atan<T extends INDArray<T>>(this: T): T {
  const copy: T = Object.assign(Object.create(Object.getPrototypeOf(this)), this) as T;

  copy.data = new this.type(this.data);
  copy.shape = this.shape;
  copy.length = this.length;
  copy.type = this.type;

  return copy as T;
};
