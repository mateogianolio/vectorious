// Logistic regression example based on https://github.com/junku901/dnn
import { NDArray } from '../src/core';
import { array } from '../src/core/array';
import { map } from '../src/core/map';
import { ones } from '../src/core/ones';
import { zeros } from '../src/core/zeros';

// Perform row-wise softmax on matrix
const softmax = (x: NDArray) => {
  const { data: d1 } = x;
  const [, c] = x.shape;
  const max: number = x.max();
  let sum: number;

  return x
    .add(ones(...x.shape).scale(-max))
    .exp()
    .map((value: number, index: number) => {
      const i: number = Math.floor(index / c);
      const j: number = index % c;

      if (j === 0) {
        sum = 0;

        let k: number;
        for (k = 0; k < c; k += 1) {
          sum += d1[i * c + k];
        }
      }

      return value / sum;
    });
};

// Get col-wise mean of matrix as vector
const mean = (x: NDArray) => {
  const { data: d1 } = x;
  const [, c] = x.shape;
  const vec = zeros(c);

  return vec.map((_: number, index: number): number => {
    let sum: number = 0;
    let j: number;
    for (j = 0; j < c; j += 1) {
      sum += d1[index * c + j];
    }

    return sum / c;
  });
};

// Row-wise add vector to matrix
const addMatVec = (x: NDArray, y: NDArray) => {
  const { data: d1 } = y;
  const [, c] = x.shape;

  return map(x, (value: number, index: number): number => {
    const j: number = index % c;

    return value + d1[j];
  });
};

((): void => {
  const x = array([
    [1, 1, 1, 0, 0],
    [0, 0, 1, 1, 1],
  ]);

  const y = array([
    [1, 0],
    [0, 1],
  ]);

  const w = zeros(x.shape[1], y.shape[1]);
  const b = zeros(y.shape[1]);

  // Learning rate
  const alpha: number = 0.01;

  let prob: NDArray;
  let delta: NDArray;

  // Train
  let i: number;
  for (i = 0; i < 800; i += 1) {
    prob = softmax(addMatVec(x.multiply(w), b));
    delta = y.copy().subtract(prob);

    w.add(x.T.multiply(delta).scale(alpha));
    b.add(mean(delta).scale(alpha));
  }

  // Predict
  const z = array([
    [1, 1, 0, 0, 0],
    [0, 0, 0, 1, 1],
    [1, 1, 1, 1, 1],
  ]);

  console.log(softmax(addMatVec(z.multiply(w), b)));
  // Prediction should be close to [[1, 0], [0, 1], [0.5, 0.5]]
})();
