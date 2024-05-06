import { NDArray } from './';

/**
 * @static
 * @memberof vectorious
 * @function set
 * @description Sets the element at `i, j, ..., n` to `value`.
 * @param {NDArray} x
 * @param {Number[]} ...indices
 * @param {Number} value
 * @returns {NDArray}
 * @example
 * import { set } from 'vectorious/core/set';
 *
 * set([1, 2, 3], 1, 0); // => array([1, 0, 3])
 */
export const set = (x: NDArray, ...args: number[]): void => {
  x.set(...args);
};

export default function (this: NDArray, ...args: number[]): void {
  const indices: number[] = args.slice(0, -1);
  const value: number = args[args.length - 1];

  this.check(...indices);

  const { shape: s1 } = this;
  let index: number = 0;

  let i: number;
  for (i = 0; i < indices.length; i += 1) {
    index *= s1[i];
    index += indices[i];
  }

  this.data[index] = value;
}
