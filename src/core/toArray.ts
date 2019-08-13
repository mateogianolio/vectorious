import { NDArray } from './';

NDArray.toArray = <T extends NDArray>(x: T | ArrayLike<any>): number[] => NDArray.array<T>(x).toArray();

NDArray.prototype.toArray = function<T extends NDArray>(this: T): number[] {
  const { length: l1, shape: s1 } = this;
  const { length: ndim } = s1;

  let i: number;
  let j: number;
  let k: number;
  const res: any = [];

  for (i = 0; i < l1; i += 1) {
    const indices: number[] = [];

    for (j = 0; j < ndim; j += 1) {
      let p: number = 1;
      for (k = j + 1; k < ndim; k += 1) {
        p *= s1[k];
      }

      let index: number = Math.floor(i / p);
      if (j > 0) {
        index %= s1[j];
      }

      indices.push(index);
    }

    let node: any = res;
    for (j = 0; j < ndim; j += 1) {
      const index: number = indices[j];
      if (j < ndim - 1) {
        if (!node[index]) {
          node[index] = [];
        }
        node = node[index];
      } else {
        node[index] = this.get(...indices);
      }
    }
  }

  return res;
};
