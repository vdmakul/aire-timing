export class Cache<K, V> {
  private _cached = {};

  public get(key: K): V {
    return this._cached[JSON.stringify(key)];
  }

  public find(filter: (key: K) => boolean): V[] {
    return Object.keys(this._cached)
      .map((key: string) => JSON.parse(key))
      .filter(filter)
      .map((key: K) => this.get(key));
  }

  public put(key: K, value: V): void {
    this._cached[JSON.stringify(key)] = value;
  }

}
