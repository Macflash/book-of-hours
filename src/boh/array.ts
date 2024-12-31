export {};

declare global {
  interface Array<T> {
    noNulls(): Array<Exclude<T, null | undefined>>;
    all(callback: (x: T) => boolean): boolean;
  }
}

if (!Array.prototype.noNulls) {
  Array.prototype.noNulls = function <T>(this: T[]): T[] {
    return this.filter((x) => x).map((x) => x!);
  };
}

if (!Array.prototype.all) {
  Array.prototype.all = function <T>(
    this: T[],
    callback: (t: T) => boolean
  ): boolean {
    return !this.some((t) => !callback(t));
  };
}
