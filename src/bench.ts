const benchmark: any = require('nodemark');
const plt: any = require('matplotnode');
const { execSync } = require('child_process');

export const bench = (
  group: string,
  name: string,
  setup: (n: number) => any[],
  ...funcs: Array<(...args: any[]) => void>
): typeof benchmark => {
  execSync(`mkdir -p benchmarks/${group}`);
  const filename: string = `benchmarks/${group}/${name}.png`;
  const xs: number[] = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072];
  let ys: number[] = [];

  plt.title(name);

  // tslint:disable-next-line: no-console
  console.log(`${group} > ${name}`);

  funcs.forEach((func: (...args: any[]) => void, i: number) => {
    xs.forEach((x: number) => {
      let args: any[] = [];
      const result: typeof benchmark = benchmark(
        (): void => { func(...args); },
        (): void => { args = setup(x); },
        250
      );

      ys.push(result.milliseconds(3));

      // tslint:disable-next-line: no-console
      console.log(`n=${x} ${result}`);
    });

    const label: string = i === 0 ? `${name} [prototype]` : `${name} [static]`;

    plt.plot(xs, ys, `label=${label}`);
    ys = [];
  });

  plt.xlabel('n');
  plt.ylabel('ms');

  plt.grid(true);
  plt.legend();

  plt.save(filename);
  plt.clf();

  // tslint:disable-next-line: no-console
  console.log(`${filename}`);
};
