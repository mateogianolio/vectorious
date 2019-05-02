import { INDArray } from '../types';

/**
 * Converts current matrix into a readable formatted string
 */
export function toString<T extends INDArray>(this: T): string {
  const { data: d1 } = this;
  const [r, c] = this.shape;
  const result: string[] = [];

  let i: number;
  for (i = 0; i < r; i += 1) {
    result.push(`[${d1.subarray(i * c, (i + 1) * c)}]`);
  }

  return `[${result.join(', \n')}]`;
}
