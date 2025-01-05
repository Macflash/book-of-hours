export {};

declare global {
  interface Array<T> {
    noNulls(): Array<Exclude<T, null | undefined>>;
    all(callback: (x: T) => boolean): boolean;
    unique(): Array<T>;
    notIn(other: T[]): Array<T>;
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

if (!Array.prototype.unique) {
  Array.prototype.unique = function <T>(this: T[]): T[] {
    const set = new Set();
    return this.filter((x) => {
      if (set.has(x)) return false;
      set.add(x);
      return true;
    });
  };
}

if (!Array.prototype.notIn) {
  Array.prototype.notIn = function <T>(this: T[], other: T[]): T[] {
    return this.filter((t) => !other.includes(t));
  };
}
