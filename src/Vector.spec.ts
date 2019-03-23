import * as assert from 'assert';

import { Vector } from './';

describe('Vector', () => {
  describe('Vector.binOp(a, b, (a, b) => a + b)', () => {
    it('should work as the static equivalent of a.binOp(b, (a, b) => a + b)', () => {
      const x: Vector = new Vector([1, 1, 1]);
      const y: Vector = new Vector([1, 2, 3]);
      const sum: (a: number, b: number) => number = (a: number, b: number): number => a + b;

      assert.deepStrictEqual(x.copy().binOp(y, sum), Vector.binOp(x, y, sum));
    });
  });

  describe('Vector.add(a, b)', () => {
    it('should work as the static equivalent of a.add(b)', () => {
      const x: Vector = new Vector([2, 3, 4]);
      const y: Vector = new Vector([1, 2, 3]);

      assert.deepStrictEqual(x.copy().add(y), Vector.add(x, y));
    });
  });

  describe('Vector.subtract(a, b)', () => {
    it('should work as the static equivalent of a.subtract(b)', () => {
      const x: Vector = new Vector([2, 3, 4]);
      const y: Vector = new Vector([1, 2, 3]);

      assert.deepStrictEqual(x.copy().subtract(y), Vector.subtract(x, y));
    });
  });

  describe('Vector.dot(a, b)', () => {
    it('should work as the static equivalent of a.dot(b)', () => {
      const x: Vector = new Vector([2, 3, 4]);
      const y: Vector = new Vector([1, 2, 3]);

      assert.deepStrictEqual(x.copy().dot(y), Vector.dot(x, y));
    });
  });

  describe('Vector.scale(a, scalar)', () => {
    it('should work as the static equivalent of a.scale(scalar)', () => {
      const x: Vector = new Vector([2, 3, 4]);

      assert.deepStrictEqual(x.copy().scale(5), Vector.scale(x, 5));
    });
  });

  describe('Vector.normalize(a)', () => {
    it('should work as the static equivalent of a.normalize()', () => {
      const x: Vector = new Vector([2, 3, 4]);

      assert.deepStrictEqual(x.normalize(), Vector.normalize(x));
    });
  });

  describe('Vector.project(a, b)', () => {
    it('should work as the static equivalent of a.project(b)', () => {
      const x: Vector = new Vector([2, 3, 4]);
      const y: Vector = new Vector([1, 2, 3]);

      assert.deepStrictEqual(x.copy().project(y), Vector.project(x, y));
    });
  });

  describe('Vector.angle(a, b)', () => {
    it('should work as the static equivalent of a.angle(b)', () => {
      const x: Vector = new Vector([0, 1, 0]);
      const y: Vector = new Vector([1, 0, 1]);

      assert.deepStrictEqual(x.copy().angle(y), Vector.angle(x, y));
    });
  });

  describe('Vector.equals(a, b)', () => {
    it('should work as the static equivalent of a.equals(b)', () => {
      const x: Vector = new Vector([0, 1, 0]);
      const y: Vector = new Vector([1, 0, 1]);

      assert.deepStrictEqual(x.copy().equals(y), Vector.equals(x, y));
    });
  });

  describe('Vector.combine(a, b)', () => {
    it('should work as the static equivalent of a.combine(b)', () => {
      const x: Vector = new Vector([0, 1, 0]);
      const y: Vector = new Vector([1, 0, 1]);

      assert.deepStrictEqual(x.copy().combine(y), Vector.combine(x, y));
    });
  });

  describe('Vector.zeros()', () => {
    it('should throw error if argument < 0', () => {
      assert.throws(() => { Vector.zeros(-1); }, Error);
    });

    it('should return empty vector if argument === 0', () => {
      assert.deepStrictEqual(new Vector(), Vector.zeros(0));
    });

    it('should create Vector(0, 0, 0)', () => {
      assert.deepStrictEqual(new Vector([0, 0, 0]), Vector.zeros(3));
    });
  });

  describe('Vector.ones()', () => {
    it('should throw error if argument < 0', () => {
      assert.throws(() => { Vector.ones(-1); }, Error);
    });

    it('should return empty vector if argument === 0', () => {
      assert.deepStrictEqual(new Vector(), Vector.ones(0));
    });

    it('should create Vector(1, 1, 1)', () => {
      assert.deepStrictEqual(new Vector([1, 1, 1]), Vector.ones(3));
    });
  });

  describe('Vector.random()', () => {
    it('should throw error if count < 0', () => {
      assert.throws(() => { Vector.random(-1); }, Error);
    });

    it('should return empty vector if count === 0', () => {
      assert.deepStrictEqual(new Vector(), Vector.random(0));
    });

    it('should work as expected with min and max', () => {
      assert(Vector.random(3).min() >= 0);
      assert(Vector.random(3).max() < 1);
    });
  });

  describe('.range()', () => {
    it('should throw error if wrong number or arguments supplied', () => {
      assert.throws(() => { Vector.range(1); }, Error);
      assert.throws(() => { Vector.range(1, 2, 3, 4); }, Error);
    });

    it('should throw error if step > start - end', () => {
      assert.throws(() => { Vector.range(0, 0); }, Error);
      assert.throws(() => { Vector.range(1, 3, 2); }, Error);
    });

    it('should work with type', () => {
      const x: Vector = Vector.range(0, 2, Int8Array);
      assert.deepStrictEqual(x.type, Int8Array);
    });

    it('should work as expected', () => {
      const x: Vector = Vector.range(0, 5);
      const y: Vector = Vector.range(5, 2, 10);
      const z: Vector = Vector.range(5, 2, 0);

      assert.deepStrictEqual(new Vector([0, 1, 2, 3, 4]), x);
      assert.deepStrictEqual(new Vector([5, 7, 9]), y);
      assert.deepStrictEqual(new Vector([5, 3, 1]), z);
    });
  });
});
