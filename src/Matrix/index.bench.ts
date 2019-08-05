import { bench } from '../bench';

import { Matrix } from './';

const { floor, random, sqrt } = Math;
const r: (n: number) => Matrix = (n: number): Matrix => Matrix.random(floor(sqrt(n)), floor(sqrt(n)));
const rhs: (n: number) => Matrix = (n: number): Matrix => Matrix.random(floor(sqrt(n)), 1);

bench(
  'Matrix',
  'binOp',
  (n: number): [Matrix, Matrix, (a: number, b: number) => number] =>
    [r(n), r(n), (a: number, b: number): number => a + b],
  (x: Matrix, y: Matrix, op: (a: number, b: number) => number): void => {
    x.binOp(y, op);
  },
  (x: Matrix, y: Matrix, op: (a: number, b: number) => number): void => {
    Matrix.binOp(x, y, op);
  }
);

bench(
  'Matrix',
  'add',
  (n: number): [Matrix, Matrix] => [r(n), r(n)],
  (x: Matrix, y: Matrix): void => {
    x.add(y);
  },
  (x: Matrix, y: Matrix): void => {
    Matrix.add(x, y);
  }
);

bench(
  'Matrix',
  'subtract',
  (n: number): [Matrix, Matrix] => [r(n), r(n)],
  (x: Matrix, y: Matrix): void => {
    x.subtract(y);
  },
  (x: Matrix, y: Matrix): void => {
    Matrix.subtract(x, y);
  }
);

bench(
  'Matrix',
  'product',
  (n: number): [Matrix, Matrix] => [r(n), r(n)],
  (x: Matrix, y: Matrix): void => {
    x.product(y);
  },
  (x: Matrix, y: Matrix): void => {
    Matrix.product(x, y);
  }
);

bench(
  'Matrix',
  'scale',
  (n: number): [Matrix, number] => [r(n), random()],
  (x: Matrix, alpha: number): void => {
    x.scale(alpha);
  },
  (x: Matrix, alpha: number): void => {
    Matrix.scale(x, alpha);
  }
);

bench(
  'Matrix',
  'multiply',
  (n: number): [Matrix, Matrix] => [r(n), r(n)],
  (x: Matrix, y: Matrix): void => {
    x.multiply(y);
  },
  (x: Matrix, y: Matrix): void => {
    Matrix.multiply(x, y);
  }
);

bench(
  'Matrix',
  'transpose',
  (n: number): [Matrix] => [r(n)],
  (x: Matrix): void => {
    x.transpose();
  },
  (x: Matrix): void => {
    x.T;
  }
);

bench(
  'Matrix',
  'inverse',
  (n: number): [Matrix] => [r(n)],
  (x: Matrix): void => {
    x.inverse();
  }
);

bench(
  'Matrix',
  'gauss',
  (n: number): [Matrix] => [r(n)],
  (x: Matrix): void => {
    x.gauss();
  }
);

bench(
  'Matrix',
  'lu',
  (n: number): [Matrix] => [r(n)],
  (x: Matrix): void => {
    x.lu();
  }
);

bench(
  'Matrix',
  'lu_factor',
  (n: number): [Matrix] => [r(n)],
  (x: Matrix): void => {
    x.lu_factor();
  },
  (x: Matrix): void => {
    Matrix.lu_factor(x);
  }
);

bench(
  'Matrix',
  'solve',
  (n: number): [Matrix, Matrix] => [r(n), rhs(n)],
  (x: Matrix, y: Matrix): void => {
    x.solve(y);
  }
);

bench(
  'Matrix',
  'augment',
  (n: number): [Matrix, Matrix] => [r(n), r(n)],
  (x: Matrix, y: Matrix): void => {
    x.augment(y);
  },
  (x: Matrix, y: Matrix): void => {
    Matrix.augment(x, y);
  }
);

bench(
  'Matrix',
  'diag',
  (n: number): [Matrix] => [r(n)],
  (x: Matrix): void => {
    x.diagonal();
  }
);

bench(
  'Matrix',
  'determinant',
  (n: number): [Matrix] => [r(n)],
  (x: Matrix): void => {
    x.determinant();
  }
);

bench(
  'Matrix',
  'trace',
  (n: number): [Matrix] => [r(n)],
  (x: Matrix): void => {
    x.trace();
  }
);

bench(
  'Matrix',
  'swap',
  (n: number): [Matrix, number, number] => [r(n), floor(random() * sqrt(n)), floor(random() * sqrt(n))],
  (x: Matrix, i: number, j: number): void => {
    x.swap(i, j);
  }
);

bench(
  'Matrix',
  'rank',
  (n: number): [Matrix] => [r(n)],
  (x: Matrix): void => {
    x.rank();
  },
  (x: Matrix): void => {
    Matrix.rank(x);
  }
);

bench(
  'Matrix',
  'rowAdd',
  (n: number): [Matrix, number, number] => [r(n), floor(random() * floor(sqrt(n))), floor(random() * floor(sqrt(n)))],
  (x: Matrix, dest: number, source: number): void => {
    x.rowAdd(dest, source);
  }
);
