import { TypedArray, TypedArrayConstructor } from '../types';

import { NDArray } from './';

/**
 * @static
 * @memberof module:Globals
 * @function range
 * @description
 * Creates an array containing a range (can be either ascending or descending)
 * of numbers specified by the arguments provided (e.g. `NDArray.range(0, .5, 2)`
 * gives an array containing all numbers in the interval `[0, 2)` separated by
 * steps of `0.5`)
 * @param {Number} start
 * @param {Number} step
 * @param {Number} stop
 * @returns {NDArray}
 * @example
 * import { range } from 'vectorious/core/range';
 * 
 * range(1, 2, 9); // => array([1, 3, 5, 7])
 */
export const range = (...args: number[]): NDArray => {
  const type: TypedArrayConstructor = Float32Array;
  let backwards: boolean = false;
  let start: number;
  let step: number;
  let end: number;

  switch (args.length) {
    case 2:
      end = args.pop() as number;
      step = 1;
      start = args.pop() as number;
      break;
    case 3:
      end = args.pop() as number;
      step = args.pop() as number;
      start = args.pop() as number;
      break;
    default:
      throw new Error('invalid range');
  }

  if (end - start < 0) {
    const copy: number = end;
    end = start;
    start = copy;
    backwards = true;
  }

  if (step > end - start) {
    throw new Error('invalid range');
  }

  const data: TypedArray = new type(Math.ceil((end - start) / step));

  let i: number = start;
  let j: number = 0;

  if (backwards) {
    for (; i < end; i += step, j += 1) {
      data[j] = end - i + start;
    }
  } else {
    for (; i < end; i += step, j += 1) {
      data[j] = i;
    }
  }

  return new NDArray(data);
};
