import {
  INDArray,
  TypedArray,
} from '../types';

export class NDIter {
  private data: TypedArray;
  private shape_m1: number[];
  private strides: number[];
  private backstrides: number[];
  private length_m1: number;
  private ndim_m1: number;
  private counter: number;
  public coords: number[];
  public pos: number;

  constructor(x: INDArray) {
    const {
      data,
      shape,
      strides,
      length,
    } = x;

    this.data = data;
    this.strides = strides;
    this.length_m1 = length - 1;
    this.shape_m1 = shape.map((dim: number) => dim - 1);
    this.ndim_m1 = shape.length - 1;
    this.coords = shape.map(() => 0);
    this.backstrides = this.shape_m1.map((dim: number, i: number) => dim * strides[i]);
    this.counter = 0;
    this.pos = 0;
  }

  done() {
    return this.counter > this.length_m1;
  }

  next() {
    this.counter += 1;

    const {
      strides,
      ndim_m1,
      shape_m1,
      coords,
      backstrides,
    } = this;

    let i;
    for (i = ndim_m1; i >= 0; i -= 1) {
      if (coords[i] < shape_m1[i]) {
        coords[i] += 1;
        this.pos += strides[i];
        break;
      } else {
        coords[i] = 0;
        this.pos -= backstrides[i];
      }
    }

    const done = this.done();

    return {
      value: done ? undefined : this.data[this.pos],
      done,
    };
  }

  [Symbol.iterator]() {
    return this;
  }
}
