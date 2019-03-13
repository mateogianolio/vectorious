import { TypedArray, TypedArrayConstructor } from './types';

const benchmark: any = require('nodemark');
const plt: any = require('matplotnode');

export const flatten: (input: any[]) => number[] = (input: any[]): number[] =>
  input.reduce(
    (acc: any[], next: any) => acc.concat(Array.isArray(next) ? flatten(next) : next),
    []
  );

export const shape: (input: any) => number[] = (input: any): number[] => Array.isArray(input)
  ? [input.length].concat(shape(input[0]))
  : [];

export const type: (input: TypedArray) => TypedArrayConstructor = (input: TypedArray): TypedArrayConstructor => {
  switch (input.constructor.name) {
    case 'Int8Array': return Int8Array;
    case 'Uint8Array': return Uint8Array;
    case 'Int16Array': return Int16Array;
    case 'Uint16Array': return Uint16Array;
    case 'Int32Array': return Int32Array;
    case 'Uint32Array': return Uint32Array;
    case 'Uint8ClampedArray': return Uint8ClampedArray;
    case 'Float32Array': return Float32Array;
    default: return Float64Array;
  }
};

export const isTypedArray: (input: any) => boolean = (input: any): boolean =>
  !!(input && input.buffer instanceof ArrayBuffer && input.BYTES_PER_ELEMENT);

export const bench: (
  group: string,
  name: string,
  setup: (n: number) => any[],
  ...funcs: Array<(...args: any[]) => void>
) => typeof benchmark = (
  group: string,
  name: string,
  setup: (n: number) => any[],
  ...funcs: Array<(...args: any[]) => void>
): typeof benchmark => {
  const filename: string = `benchmarks/${group}/${name}.png`;
  const xs: number[] = [4, 16, 64, 256, 1024, 4096, 16384, 65536];
  let ys: number[] = [];

  plt.title(name);

  // tslint:disable-next-line: no-console
  console.log(`${group} > ${name}`);

  for (const func of funcs) {
    for (const x of xs) {
      let args: any[] = [];
      const result: typeof benchmark = benchmark(
        (): void => { func(...args); },
        (): void => { args = setup(x); }
      );

      ys.push(result.milliseconds(3));

      // tslint:disable-next-line: no-console
      console.log(`n=${x} ${result}`);
    }

    const src: string = func.toString().replace(/\s/g, '');
    const label: string = src.substring(
      src.lastIndexOf('{') + 1,
      src.lastIndexOf('}')
    );

    plt.plot(xs, ys, `label=${label}`);
    ys = [];
  }

  plt.xlabel('n');
  plt.ylabel('ms');
  plt.xlim(0, xs[xs.length - 1]);
  plt.ylim(0, 1);

  plt.grid(true);
  plt.legend();

  plt.save(filename);
  plt.clf();

  // tslint:disable-next-line: no-console
  console.log(`${filename}`);
};
