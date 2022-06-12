import { array } from '../src/core/array';
import { random } from '../src/core/random';
import { ones } from '../src/core/ones';
import { map } from '../src/core/map';

const sigmoid: (ddx: boolean) => (value: number) => number = (ddx: boolean): (value: number) => number =>
  (value: number): number => ddx
    ? value * (1 - value)
    : 1 / (Math.exp(-value) + 1);

((): void => {
  // Input
  const x = array([
    [0, 0, 1],
    [0, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ]);

  // Output
  const y = array([[0, 1, 1, 0]]).T;

  // Initialize weights with values in [-1, 1)
  const syn0 = random(3, 4).scale(2).subtract(ones(3, 4));
  const syn1 = random(4, 1).scale(2).subtract(ones(4, 1));

  // Layers and deltas
  let l0 = random(4, 4);
  let l1 = random(4, 1);
  let l0_delta = random(4, 4);
  let l1_delta = random(4, 1);

  let i: number;
  for (i = 0; i < 10000; i += 1) {
    console.log(`${(100 * i / 10000).toFixed(2)} %`);

    l0 = map(x.multiply(syn0), sigmoid(false));
    l1 = map(l0.multiply(syn1), sigmoid(false));

    l1_delta = y.copy().subtract(l1).product(map(l1, sigmoid(true)));
    l0_delta = l1_delta.multiply(syn1.T).product(map(l0, sigmoid(true)));

    syn1.add(l0.T.multiply(l1_delta));
    syn0.add(x.T.multiply(l0_delta));
  }

  // Final trained neural network output!
  // Should be close to [[0, 1, 1, 0]] transpose
  console.log(l1);
})();
