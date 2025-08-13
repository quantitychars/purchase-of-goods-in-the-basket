export default class CacheRepoDecorator {
  //   /**
  //    * @param {ProductsRepository} innerRepo оригінальний репозиторій
  //    * @param {number} ttl           час життя кешу (мс)
  //    */
  constructor(innerRepo, ttl = 60_000) {
    this.inner = innerRepo;
    this.ttl = ttl;
    this._cache = null;
    this._expires = 0;
  }

  async getAll() {
    const now = Date.now();
    if (this._cache && now < this._expires) return this._cache;

    const data = await this.inner.getAll();
    this._cache = data;
    this._expires = now + this.ttl;
    return data;
  }

  /** інші методи просто делегуємо */
  getById(id) {
    // можна оптимізувати: шукати в кеші, не викликаючи inner.getById
    return this.getAll().then((list) => list.find((p) => p.id === id));
  }
}
