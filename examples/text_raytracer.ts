// Ported from Rust from
// URL: https://gist.github.com/joshmarinacci/c84d0979e100d107f685
// URL: http://joshondesign.com/2014/09/17/rustlang
// tslint:disable: max-classes-per-file
import { NDArray } from '../src/core';
import { array } from '../src/core/array';

const render: (pixel: string) => void = process.stdout.write.bind(process.stdout);

class Ray {
  public dir: NDArray;
  public orig: NDArray;

  public constructor(orig: NDArray, dir: NDArray) {
    this.orig = orig;
    this.dir = dir;
  }
}

class Sphere {
  public center: NDArray;
  public color: NDArray;
  public radius: number;

  public constructor(center: NDArray, radius: number, color: NDArray) {
    this.center = center;
    this.radius = radius;
    this.color = color;
  }

  public normal(pt: NDArray) {
    return pt.copy().subtract(this.center).normalize();
  }
}

class Light {
  public color: NDArray;
  public position: NDArray;

  public constructor(position: NDArray, color: NDArray) {
    this.position = position;
    this.color = color;
  }
}

class Hit {
  public obj: Sphere;
  public value: number;

  public constructor(obj: Sphere, value: number) {
    this.obj = obj;
    this.value = value;
  }
}

const clamp:
(x: number, a: number, b: number) => number =
(x: number, a: number, b: number): number => {
  if (x < a) {
    return a;
  }

  if (x > b) {
    return b;
  }

  return x;
};

const diffuseShading = (pi: NDArray, obj: Sphere, light: Light) => {
  const n = obj.normal(pi);
  const lam1: number = light.position.copy().subtract(pi).normalize().dot(n);
  const lam2: number = clamp(lam1, 0, 1);

  return light.color.copy().scale(lam2 * 0.5).add(obj.color.copy().scale(0.3));
};

const intersectSphere = (ray: Ray, center: NDArray, radius: number): number | undefined => {
  const l = center.copy().subtract(ray.orig);
  const tca: number = l.dot(ray.dir);
  if (tca < 0) {
    return undefined;
  }

  const d2: number = l.dot(l) - tca * tca;
  const r2: number = radius * radius;
  if (d2 > r2) {
    return undefined;
  }

  const thc: number = Math.sqrt(r2 - d2);
  const t0: number = tca - thc;
  if (t0 > 1e4) {
    return undefined;
  }

  return t0;
};

const range = (lo: number, hi: number, cb: (value: number) => void): void => {
  let i: number;
  for (i = lo; i < hi; i += 1) {
    cb(i);
  }
};

// Declare colors
const WHITE = array([1, 1, 1]);
const RED = array([1, 0, 0]);
const GREEN = array([0, 1, 0]);
const BLUE  = array([0, 0, 1]);

// Declare lighting
const LIGHT1: Light = new Light(array([0.7, -1, 1.7]), WHITE);

const shadePixel = (ray: Ray, obj: Sphere, tval: number): number => {
  const pi = ray.orig.copy().add(ray.dir.copy().scale(tval));
  const color = diffuseShading(pi, obj, LIGHT1);
  const col: number = (color.data[0] + color.data[1] + color.data[2]) / 3;

  return Math.floor(col * 6);
};

// Declare pixel intensities & screen size
const lut: string[] = ['.', '-', '+', '*', 'X', 'M'];
const w: number = 20 * 4;
const h: number = 10 * 4;

// Declare scene
const scene: Sphere[] = [
  new Sphere(array([-1, 0, 3]), 0.3, RED),
  new Sphere(array([0, 0, 3]), 0.8, GREEN),
  new Sphere(array([1, 0, 3]), 0.4, BLUE),
];

// Render scene
range(0, h, (j: number): void => {
  range(0, w, (i: number): void => {
    const ray: Ray = new Ray(
      array([0, 0, 0]),
      array([(i - w / 2) / w, (j - h / 2) / h, 1]).normalize()
    );

    let hit: Hit | undefined;
    let minRet: number | undefined;
    let pixel: string;
    let k: number;

    for (k = 0; k < scene.length; k += 1) {
      const obj: Sphere = scene[k];
      const ret: number | undefined = intersectSphere(ray, obj.center, obj.radius);

      if (typeof ret === 'undefined') {
        continue;
      }

      // Draw the closest intersecting point
      if (typeof minRet === 'undefined' || ret < minRet) {
        minRet = ret;
        hit = new Hit(obj, ret);
      }
    }

    pixel = typeof hit !== 'undefined'
      ? lut[shadePixel(ray, hit.obj, hit.value)]
      : ' ';

    render(pixel);
  });

  render('\n');
});
