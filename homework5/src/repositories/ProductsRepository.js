import Product from "../models/Product.js";

export default class ProductsRepository {
  /** @param {(input: string, init?: RequestInit) => Promise<Response>} fetcher */
  constructor(fetcher = fetch) {
    this.fetcher = fetcher.bind(window);
  }

  static _cache = null; // кешуємо, щоб не тягнути JSON кожного разу

  async getAll() {
    if (ProductsRepository._cache) return ProductsRepository._cache;

    const res = await this.fetcher("/products.json");
    if (!res.ok) throw new Error(`Failed to load products: ${res.status}`);
    const raw = await res.json(); // DTO[]

    ProductsRepository._cache = raw.map((dto) => new Product(dto));
    return ProductsRepository._cache;
  }

  async getById(id) {
    const list = await this.getAll();
    return list.find((p) => p.id === id);
  }
}
