import { Vector } from './';

/**
 * Converts `x` into a readable formatted string.
 */
Vector.toString = (x: Vector): string => x.toString();

/**
 * Converts current vector into a readable formatted string.
 */
Vector.prototype.toString = function<T extends Vector>(this: T): string {
  const { length: l1, data: d1 } = this;
  const result: string[] = ['['];

  let i: number = 0;
  if (i < l1) {
    result.push(`${d1[i]}`);
    i += 1;
  }

  while (i < l1) {
    result.push(`, ${d1[i]}`);
    i += 1;
  }

  result.push(']');

  return result.join('');
};
