import { deepStrictEqual, throws } from 'assert';

import { axpy, dot, iamax, nrm2, scal } from './blas';

let nblas: any;
try {
  nblas = require('nblas');
} catch (err) {}

describe('(blas) axpy', () => {
  it('should for float64 dtype', () => {
    const n = 4;
    const alpha = Math.random();
    const x = new Float64Array([1, 2, 3, 4]);
    const y = new Float64Array([5, 6, 7, 8]);

    deepStrictEqual(axpy('float64', n, alpha, x, 1, y, 1), nblas.daxpy(n, alpha, x, 1, y, 1));
  });

  it('should for float32 dtype', () => {
    const n = 4;
    const alpha = Math.random();
    const x = new Float32Array([1, 2, 3, 4]);
    const y = new Float32Array([5, 6, 7, 8]);

    deepStrictEqual(axpy('float32', n, alpha, x, 1, y, 1), nblas.saxpy(n, alpha, x, 1, y, 1));
  });

  it('should throw error for other dtypes', () => {
    const n = 4;
    const alpha = Math.random();
    const x = new Int8Array([1, 2, 3, 4]);
    const y = new Int8Array([5, 6, 7, 8]);

    throws(() => {
      axpy('int8', n, alpha, x, 1, y, 1);
    }, Error);
  });

  it('should throw error if lengths do not match', () => {
    const n = 4;
    const alpha = Math.random();
    const x = new Float64Array([1, 2]);
    const y = new Float64Array([5, 6, 7, 8]);

    throws(() => {
      axpy('float64', n, alpha, x, 1, y, 1);
    }, Error);
  });
});

describe('(blas) dot', () => {
  it('should work for float64 dtype', () => {
    const n = 4;
    const x = new Float64Array([1, 2, 3, 4]);
    const y = new Float64Array([5, 6, 7, 8]);

    deepStrictEqual(dot('float64', n, x, 1, y, 1), nblas.ddot(n, x, 1, y, 1));
  });

  it('should work for float32 dtype', () => {
    const n = 4;
    const x = new Float32Array([1, 2, 3, 4]);
    const y = new Float32Array([5, 6, 7, 8]);

    deepStrictEqual(dot('float32', n, x, 1, y, 1), nblas.sdot(n, x, 1, y, 1));
  });

  it('should throw error for other dtypes', () => {
    const n = 4;
    const x = new Int8Array([1, 2, 3, 4]);
    const y = new Int8Array([5, 6, 7, 8]);

    throws(() => {
      dot('int8', n, x, 1, y, 1);
    }, Error);
  });

  it('should throw error if lengths do not match', () => {
    const n = 4;
    const x = new Float64Array([1, 2]);
    const y = new Float64Array([5, 6, 7, 8]);

    throws(() => {
      dot('float64', n, x, 1, y, 1);
    }, Error);
  });
});

describe('(blas) iamax', () => {
  it('should work for float64 dtype', () => {
    const n = 4;
    const x = new Float64Array([1, 2, 3, 4]);

    deepStrictEqual(iamax('float64', n, x, 1), nblas.idamax(n, x, 1));
  });

  it('should work for float32 dtype', () => {
    const n = 4;
    const x = new Float32Array([1, 2, 3, 4]);

    deepStrictEqual(iamax('float32', n, x, 1), nblas.isamax(n, x, 1));
  });

  it('should throw error for other dtypes', () => {
    const n = 4;
    const x = new Int8Array([1, 2, 3, 4]);

    throws(() => {
      iamax('int8', n, x, 1);
    }, Error);
  });

  it('should throw error if lengths do not match', () => {
    const n = 4;
    const x = new Float64Array([1, 2]);

    throws(() => {
      iamax('float64', n, x, 1);
    }, Error);
  });
});

describe('(blas) nrm2', () => {
  it('should work for float64 dtype', () => {
    const n = 4;
    const x = new Float64Array([1, 2, 3, 4]);

    deepStrictEqual(nrm2('float64', n, x, 1), nblas.dnrm2(n, x, 1));
  });

  it('should work for float32 dtype', () => {
    const n = 4;
    const x = new Float32Array([1, 2, 3, 4]);

    deepStrictEqual(nrm2('float32', n, x, 1), nblas.snrm2(n, x, 1));
  });

  it('should throw error for other dtypes', () => {
    const n = 4;
    const x = new Int8Array([1, 2, 3, 4]);

    throws(() => {
      nrm2('int8', n, x, 1);
    }, Error);
  });

  it('should throw error if lengths do not match', () => {
    const n = 4;
    const x = new Float64Array([1, 2]);

    throws(() => {
      nrm2('float64', n, x, 1);
    }, Error);
  });
});

describe('(blas) scal', () => {
  it('should work for float64 dtype', () => {
    const n = 4;
    const alpha = Math.random();
    const x = new Float64Array([1, 2, 3, 4]);

    deepStrictEqual(scal('float64', n, alpha, x, 1), nblas.dscal(n, alpha, x, 1));
  });

  it('should work for float32 dtype', () => {
    const n = 4;
    const alpha = Math.random();
    const x = new Float32Array([1, 2, 3, 4]);

    deepStrictEqual(scal('float32', n, alpha, x, 1), nblas.sscal(n, alpha, x, 1));
  });

  it('should throw error for other dtypes', () => {
    const n = 4;
    const alpha = Math.random();
    const x = new Int8Array([1, 2, 3, 4]);

    throws(() => {
      scal('int8', n, alpha, x, 1);
    }, Error);
  });

  it('should throw error if lengths do not match', () => {
    const n = 4;
    const alpha = Math.random();
    const x = new Float64Array([1, 2]);

    throws(() => {
      scal('float64', n, alpha, x, 1);
    }, Error);
  });
});
