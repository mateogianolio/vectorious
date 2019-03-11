const benchmark = require('nodemark');
const plt = require('matplotnode');

export const bench = (
  group: string,
  name: string,
  setup: (n: number) => any[],
  ...funcs: ((...args: any[]) => void)[]
): typeof benchmark => {
  const filename = `benchmarks/${group}/${name}.png`;
  const xs = [4, 16, 64, 256, 1024, 4096, 16384, 65536];
  let ys = [];

  plt.title(name);
  console.log(`${group} > ${name}`);

  for (const func of funcs) {
    for (const x of xs) {
      let args: any[] = [];
      const result = benchmark(
        (): void => func(...args),
        (): void => { args = setup(x); }
      );

      ys.push(result.milliseconds(3));
      console.log(`n=${x} ${result}`);
    }

    const src = func.toString().replace(/\s/g, '');
    const label = src.substring(
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

  console.log(`${filename}`);
};
