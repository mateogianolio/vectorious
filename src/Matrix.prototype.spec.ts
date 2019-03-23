import {
  deepStrictEqual,
  strictEqual,
  throws,
} from 'assert';

import { Matrix, Vector } from './';

const round: (value: number, precision: number) => number = (value: number, precision: number): number =>
  Number(value.toFixed(precision));

describe('Matrix.prototype', () => {
  describe('constructor()', () => {
    it('should work with width and height', () => {
      const x: Matrix = new Matrix(2, 2);
      const y: Matrix = new Matrix([[0, 0], [0, 0]]);

      deepStrictEqual(x, y);
    });
  });

  describe('.binOp()', () => {
    it('should work as expected', () => {
      const x: Matrix = new Matrix([[1, 1, 1]]);
      const y: Matrix = new Matrix([[1, 2, 3]]);
      const z: Matrix = new Matrix([[2, 3, 4]]);
      const f: (a: number, b: number) => number = (a: number, b: number): number => a + b;

      deepStrictEqual(x.binOp(y, f), z);
    });

    it('should throw error when sizes do not match', () => {
      const x: Matrix = new Matrix([[1, 1, 1]]);
      const y: Matrix = new Matrix([[1, 2, 3, 4]]);
      const f: (a: number, b: number) => number = (a: number, b: number): number => a + b;

      throws(() => { x.binOp(y, f); }, Error);
    });
  });

  describe('.multiply()', () => {
    it('should throw error if sizes do not match', () => {
      const x: Matrix = new Matrix([[1, 2], [3, 4]]);
      const y: Matrix = new Matrix([[1, 2]]);

      throws(() => { x.multiply(y); }, Error);
    });

    it('should work as expected', () => {
      const x: Matrix = new Matrix([[1, 2]]);
      const y: Matrix = new Matrix([[1], [2]]);
      const z: Matrix = new Matrix([[5]]);
      const u: Matrix = new Matrix([[1, 2], [2, 4]]);

      deepStrictEqual(z, x.multiply(y));
      deepStrictEqual(u, y.multiply(x));
    });

    it('should work as expected', () => {
      const x: Matrix = new Matrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
      const y: Matrix = new Matrix([[ 30,  36,  42], [ 66,  81,  96], [102, 126, 150]]);

      deepStrictEqual(y, x.multiply(x));
    });

    it('should work as expected', () => {
      const x: Matrix = new Matrix([[0, 1, 0], [1, 0, 0], [0, 0, 1]]);
      const y: Matrix = new Matrix([[1, 3, 5], [2, 4, 7], [1, 1, 0]]);
      const z: Matrix = new Matrix([[2, 4, 7], [1, 3, 5], [1, 1, 0]]);

      deepStrictEqual(z, x.multiply(y));
    });
  });

  describe('.transpose()', () => {
    it('should work as expected', () => {
      const x: Matrix = new Matrix([[1, 2]]);
      const y: Matrix = new Matrix([[1], [2]]);

      deepStrictEqual(x, y.T);
      deepStrictEqual(y, x.T);
    });

    it('should work as expected', () => {
      const x: Matrix = new Matrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
      const y: Matrix = new Matrix([[1, 4, 7], [2, 5, 8], [3, 6, 9]]);

      deepStrictEqual(x, y.T);
      deepStrictEqual(y, x.T);
    });

    it('should work as expected', () => {
      const x: Matrix = Matrix.random(2, 2);
      const y: Matrix = x.T.T;

      deepStrictEqual(x, y);
    });
  });

  describe('.inverse()', () => {
    it('should throw error if matrix is not square', () => {
      const x: Matrix = new Matrix([[1, 2]]);

      throws(() => { x.inverse(); }, Error);
    });

    it('should throw error if matrix is not invertible', () => {
      const x: Matrix = new Matrix([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ]);

      throws(() => { x.inverse(); }, Error);
    });

    it('should work as expected', () => {
      const x: Matrix = new Matrix([
        [2, -1, 0],
        [-1, 2, -1],
        [0, -1, 2],
      ]);
      const y: Matrix = new Matrix([
        [3 / 4, 1 / 2, 1 / 4],
        [1 / 2, 1, 1 / 2],
        [1 / 4, 1 / 2, 3 / 4],
      ]);

      // Need to round result to avoid floating point rounding errors, e.g. 0.99999999994
      deepStrictEqual(y, x.inverse().map((value: number) => round(value, 2)));
    });
  });

  describe('.gauss()', () => {
    it('should work as expected', () => {
      const x: Matrix = new Matrix([[1, 2, 3], [3, 4, 5]]);
      const y: Matrix = new Matrix([[1, 0, -1], [-0, 1, 2]]);

      deepStrictEqual(y, x.gauss());
    });

    it('should work as expected', () => {
      const x: Matrix = new Matrix([[1, 2, -1, -4], [2, 3, -1, -11], [-2, 0, -3, 22]]);
      const y: Matrix = new Matrix([[1, 0, 0, -8], [-0, 1, 0, 1], [-0, -0, 1, -2]]);

      deepStrictEqual(y, x.gauss());
    });

    it('should throw error if matrix is singular', () => {
      const x: Matrix = new Matrix([[0, 0], [0, 1]]);
      const y: Matrix = new Matrix([[1, 0], [0, 0]]);

      throws(() => { x.gauss(); }, Error);
      throws(() => { y.gauss(); }, Error);
    });
  });

  describe('.lu()', () => {
    it('should work as expected', () => {
      const x: Matrix = new Matrix([[1, 3, 5], [2, 4, 7], [1, 1, 0]]);
      const ys: Matrix[] = [
        new Matrix([[1, 0, 0], [0.5, 1, 0], [0.5, -1, 1]]),
        new Matrix([[2, 4, 7], [0, 1, 1.5], [0, 0, -2]]),
      ];

      deepStrictEqual(ys, x.lu().slice(0, 2));
    });

    it('should work as expected', () => {
      const x: Matrix = new Matrix([[11, 9, 24, 2], [1, 5, 2, 6], [3, 17, 18, 1], [2, 5, 7, 1]]);
      const ys: Matrix[] = [
        new Matrix([[1, 0, 0, 0], [0.27273, 1, 0, 0], [0.09091, 0.2875, 1, 0], [0.18182, 0.23125, 0.0036, 1]]),
        new Matrix([[11, 9, 24, 2], [0, 14.54545, 11.45455, 0.45455], [0, 0, -3.475, 5.6875], [0, 0, 0, 0.51079]]),
      ];

      const [lower, upper]: [Matrix, Matrix, Int32Array] = x.lu();
      deepStrictEqual(ys[0], lower.map((value: number) => round(value, 5)));
      deepStrictEqual(ys[1], upper.map((value: number) => round(value, 5)));
    });
  });

  describe('.plu()', () => {
    it('should work as expected', () => {
      const x: Matrix = new Matrix([[1, 3, 5], [2, 4, 7], [1, 1, 0]]);
      const y: Matrix = new Matrix([[2, 4, 7], [0.5, 1, 1.5], [0.5, -1, -2]]);
      const ipiv: Int32Array = new Int32Array([1, 1, 2]);

      const plu: [Matrix, Int32Array] = x.plu();
      deepStrictEqual(ipiv, plu.pop());
      deepStrictEqual(y, plu.pop());
    });
  });

  describe('.lusolve()', () => {
    it('should work as expected', () => {
      const x: Matrix = new Matrix([[1, 3, 5], [2, 4, 7], [1, 1, 0]]);
      const y: Matrix = new Matrix([[1], [3], [5]]);
      const z: Matrix = new Matrix([[3.25], [1.75], [-1.5]]);

      const [lu, ipiv] = x.plu();

      lu.lusolve(y, ipiv);
      deepStrictEqual(z, y);
    });
  });

  describe('.solve()', () => {
    it('should work as expected', () => {
      const x: Matrix = new Matrix([[1, 3, 5], [2, 4, 7], [1, 1, 0]]);
      const y: Matrix = new Matrix([[1], [3], [5]]);
      const z: Matrix = new Matrix([[3.25], [1.75], [-1.5]]);

      deepStrictEqual(z, x.solve(y));
    });
  });

  describe('.augment()', () => {
    it('should return current matrix when combined with empty matrix', () => {
      const x: Matrix = new Matrix([[1, 2], [3, 4]]);

      deepStrictEqual(x, x.augment(new Matrix()));
    });

    it('should work as expected', () => {
      const x: Matrix = new Matrix([[1, 2], [3, 4]]);
      const y: Matrix = new Matrix([[5, 6], [7, 8]]);
      const z: Matrix = new Matrix([[1, 2, 5, 6], [3, 4, 7, 8]]);

      deepStrictEqual(z, x.augment(y));
    });

    it('should throw error when rows do not match', () => {
      const x: Matrix = new Matrix([[1, 2], [3, 4]]);

      throws(() => { x.augment(new Matrix([[1]])); }, Error);
    });
  });

  describe('.diag()', () => {
    it('should work as expected', () => {
      const x: Matrix = new Matrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
      const y: Matrix = new Matrix([[1, 2, 3, 4], [5, 6, 7, 8]]);

      deepStrictEqual(new Vector([1, 5, 9]), x.diag());
      deepStrictEqual(new Vector([1, 6]), y.diag());
    });
  });

  describe('.trace()', () => {
    it('should work as expected', () => {
      const x: Matrix = new Matrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
      const y: Matrix = new Matrix([[1, 2], [3, 4]]);

      strictEqual(15, x.trace());
      strictEqual(5, y.trace());
    });
  });

  describe('.determinant()', () => {
    it('should throw error if matrix is not square', () => {
      const x: Matrix = new Matrix([[0, 0]]);
      throws(() => { x.determinant(); }, Error);
    });

    it('should work as expected', () => {
      const x: Matrix = new Matrix([[1, 2], [3, 4]]);
      const y: Matrix = new Matrix([[1, 5, 6], [3.3, 9, 10], [7, 9, 3.2]]);
      const z: Matrix = new Matrix([[2, -1, 1], [-1, -2, 1], [-1, -1, -1]]);

      strictEqual(-2, round(x.determinant(), 2));
      strictEqual(36.2, round(y.determinant(), 2));
      strictEqual(7, round(z.determinant(), 2));
    });
  });

  describe('.get()', () => {
    it('should throw error if index out of bounds', () => {
      const x: Matrix = new Matrix([[1, 2], [3, 4]]);

      throws(() => { x.get(-1, 0); }, Error);
      throws(() => { x.get(0, -1); }, Error);
      throws(() => { x.get(2, 0); }, Error);
      throws(() => { x.get(0, 2); }, Error);
    });

    it('should work as expected', () => {
      const x: Matrix = new Matrix([[1, 2], [3, 4], [5, 6]]);

      strictEqual(1, x.get(0, 0));
      strictEqual(2, x.get(0, 1));
      strictEqual(3, x.get(1, 0));
      strictEqual(4, x.get(1, 1));
      strictEqual(5, x.get(2, 0));
    });
  });

  describe('.set()', () => {
    it('should throw error if index out of bounds', () => {
      const x: Matrix = new Matrix([[1, 2], [3, 4]]);

      throws(() => { x.set(-1, 0, 0); }, Error);
      throws(() => { x.set(0, -1, 0); }, Error);
      throws(() => { x.set(2, 0, 0); }, Error);
      throws(() => { x.set(0, 2, 0); }, Error);
    });

    it('should work as expected', () => {
      const x: Matrix = new Matrix([[1, 2], [3, 4]]);

      x.set(0, 0, 0);
      x.set(0, 1, 1);
      x.set(1, 0, 0);
      x.set(1, 1, 1);

      strictEqual(0, x.get(0, 0));
      strictEqual(1, x.get(0, 1));
      strictEqual(0, x.get(1, 0));
      strictEqual(1, x.get(1, 1));
    });
  });

  describe('.swap()', () => {
    it('should throw error if index out of bounds', () => {
      const x: Matrix = new Matrix([[1, 2], [3, 4]]);

      throws(() => { x.swap(-1, 0); }, Error);
      throws(() => { x.swap(0, -1); }, Error);
      throws(() => { x.swap(2, 0); }, Error);
      throws(() => { x.swap(0, 2); }, Error);
    });

    it('should work as expected', () => {
      const x: Matrix = new Matrix([[1, 2], [3, 4], [5, 6]]);

      x.swap(0, 1);
      deepStrictEqual(new Matrix([[3, 4], [1, 2], [5, 6]]), x);
      x.swap(0, 2);
      deepStrictEqual(new Matrix([[5, 6], [1, 2], [3, 4]]), x);
    });
  });

  describe('.map()', () => {
    it('should work as expected', () => {
      const x: Matrix = new Matrix([[1, 2, 3], [4, 5, 6]]);
      const y: Matrix = x.map((value: number) => value * 2);

      deepStrictEqual(new Matrix([[2, 4, 6], [8, 10, 12]]), y);
    });
  });

  describe('.each()', () => {
    it('should work as expected', () => {
      const x: Matrix = new Matrix([[1, 2], [3, 4]]);
      const y: Matrix = Matrix.zeros(2, 2);

      x.each((value: number, i: number, j: number) => {
        y.set(i, j, value * j);
      });

      deepStrictEqual(new Matrix([[0, 2], [0, 4]]), y);
    });
  });

  describe('.reduce()', () => {
    it('should work as expected', () => {
      const x: Matrix = new Matrix([[1, 2, 3]]);
      const y: Matrix = new Matrix([[1, 2, 3], [4, 5, 6]]);
      const sum: (a: number, b: number) => number = (a: number, b: number): number => a + b;

      deepStrictEqual(6, x.reduce(sum, 0));
      deepStrictEqual(21, y.reduce(sum));
    });

    it('should throw error if empty matrix with no initial value', () => {
      const x: Matrix = new Matrix();
      const sum: (a: number, b: number) => number = (a: number, b: number): number => a + b;

      throws(() => { x.reduce(sum); }, Error);
    });
  });

  describe('.rank()', () => {
    it('should work as expected', () => {
      const x: Matrix = new Matrix([[1, 2, 1], [-2, -3, 1], [3, 5, 0]]);
      const y: Matrix = new Matrix([[1, 1, 1], [2, 2, 2], [3, 3, 3]]);
      const z: Matrix = new Matrix([[0, 0, 0], [0, 0, 0]]);

      strictEqual(x.rank(), 2);
      strictEqual(y.rank(), 1);
      strictEqual(z.rank(), 0);
    });
  });

  describe('.toString()', () => {
    it('should work as expected', () => {
      strictEqual('[[1,2], \n[3,4]]', new Matrix([[1, 2], [3, 4]]).toString());
      strictEqual('[[1,2], \n[3,4], \n[5,6]]', new Matrix([[1, 2], [3, 4], [5, 6]]).toString());
    });
  });

  describe('.toArray()', () => {
    it('should work as expected', () => {
      deepStrictEqual([[1, 2], [3, 4]], new Matrix([[1, 2], [3, 4]]).toArray());
      deepStrictEqual([[1, 2], [3, 4], [5, 6]], new Matrix([[1, 2], [3, 4], [5, 6]]).toArray());
    });
  });

  describe('.rowAdd()', () => {
    it('should work as expected', () => {
      const x: Matrix = new Matrix([[1, 2], [3, 4]]);
      x.rowAdd(0, 1, 10);
      deepStrictEqual([[31, 42], [3, 4]], x.toArray());
    });
  });

  describe('.check()', () => {
    it('should throw error if one of the indices are NaN', () => {
      const x: Matrix = new Matrix([[1, 2], [3, 4]]);

      throws(() => { x.check(NaN, 1); }, Error);
      throws(() => { x.check(0, NaN); }, Error);
    });
  });
});
