import { INDArray } from '../types';

/**
 * Returns e^x of each element of current array, where x is the argument,
 * and e is Euler's constant (2.718…), the base of the natural logarithm.
 */
export function exp<T extends INDArray<T>>(this: T): T {
  const { length: l1 } = this;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    this.data[i] = Math.exp(this.data[i]);
  }

  return this;
};