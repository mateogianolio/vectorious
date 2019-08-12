import v = require('../src');

const sigmoid: (ddx: boolean) => (value: number) => number = (ddx: boolean): (value: number) => number =>
  (value: number): number => ddx
    ? value * (1 - value)
    : 1 / (Math.exp(-value) + 1);

((): void => {
  // Input
  const x: v = v.array([
    [0, 0, 1],
    [0, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ]);

  // Output
  const y: v = v.array([[0, 1, 1, 0]]).T;

  // Initialize weights with values in [-1, 1)
  const syn0: v = v.random(3, 4).scale(2).subtract(v.ones(3, 4));
  const syn1: v = v.random(4, 1).scale(2).subtract(v.ones(4, 1));

  // Layers and deltas
  let l0: v = v.array(4, 4);
  let l1: v = v.array(4, 1);
  let l0_delta: v = v.array(4, 4);
  let l1_delta: v = v.array(4, 1);

  let i: number;
  for (i = 0; i < 60000; i += 1) {
    l0 = x.multiply(syn0).map(sigmoid(false));
    l1 = l0.multiply(syn1).map(sigmoid(false));

    l1_delta = v.subtract(y, l1).product(l1.map(sigmoid(true)));
    l0_delta = l1_delta.multiply(syn1.T).product(l0.map(sigmoid(true)));

    syn1.add(l0.T.multiply(l1_delta));
    syn0.add(x.T.multiply(l0_delta));
  }

  // Final trained neural network output!
  // Should be close to [[0, 1, 1, 0]] transpose
  console.log(l1);
})();
