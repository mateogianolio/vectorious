const benchmark = require('nodemark');
const plt = require('matplotnode');

export const bench = (
  name: string,
  func: (...args: any[]) => void,
  setup: (n: number) => any[]
): typeof benchmark => {
  const filename = `benchmarks/${name}.png`;
  const xs = [32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768];
  const ys = [];

  for (const x of xs) {
    let args: any[] = [];
    const result = benchmark(
      (): void => func(...args),
      (): void => { args = setup(x); }
    );

    ys.push(result.hz());
  }

  plt.title(name);
  plt.xlabel('n');
  plt.xlim(0, 32768);
  plt.ylabel('ops / sec');
  plt.plot(xs, ys);
  plt.grid(true);
  plt.save(filename);
  plt.clf();

  console.log(`${filename}`);
};
