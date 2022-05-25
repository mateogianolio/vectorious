const benchmark: any = require('nodemark');
const { execSync } = require('child_process');
const fs = require('fs');

export const bench = (
  group: string,
  name: string,
  setup: (n: number) => any[],
  ...funcs: Array<(...args: any[]) => void>
): typeof benchmark => {
  execSync(`mkdir -p benchmarks/${group}`);
  const filename: string = `benchmarks/${group}/${name}.txt`;
  const stream = fs.createWriteStream(filename);

  const xs: number[] = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096];

  stream.write(`${group} > ${name}`);

  funcs.forEach((func: (...args: any[]) => void, i: number) => {
    xs.forEach((x: number) => {
      let args: any[] = [];
      const result: typeof benchmark = benchmark(
        (): void => { func(...args); },
        (): void => { args = setup(x); },
        250
      );

      stream.write(`${i === 0 ? '[prototype]' : '[static'} n=${x} ${result}\n`);
    });
  });
};
