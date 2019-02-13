import './types';

export default class NDArray implements NDInterface {
  type: TypedArrayConstructor = Float64Array;
  shape: number[] = [0];
  length: number = 0;
  data: TypedArray = new Float64Array(0);

  constructor(
    data?: any,
    options?: any
  ) {
    if (ArrayBuffer.isView(data)) {
      this.data = data as TypedArray;
      this.shape = typeof options === 'object' ? options.shape : [this.data.length];
      this.length = this.data.length;
      this.type = data.constructor as TypedArrayConstructor;
      return;
    }

    if (data instanceof Array) {
      this.data = new Float64Array(([] as number[]).concat(...data));
      this.shape = [data.length];
      if ((data[0] as number[]).length) {
        this.shape.push((data[0] as number[]).length);
      }

      this.length = this.data.length;
      return;
    }
    
    if (data instanceof NDArray) {
      this.data = new data.type(data.data);
      this.shape = data.shape;
      this.length = data.length;
      this.type = data.type;
      return;
    }
    
    if (typeof data === "number" && !options) {
      this.data = new Float64Array(data);
      this.shape = [data, 1];
      this.length = data;
      return;
    }
    
    if (typeof data === "number" && typeof options === "number") {
      this.data = new Float64Array(data * options);
      this.shape = [data, options];
      this.length = data * options;
      return;
    }

    this.data = new Float64Array(0);
    this.shape = [0];
    this.length = 0;
    this.type = Float64Array;
  }
}