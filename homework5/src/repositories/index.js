import ProductsRepository from "./ProductsRepository";
import CacheRepoDecorator from "./decorators/CacheRepoDecorator";
console.log("✅ productsRepo created");
export const productsRepo = new CacheRepoDecorator(
  new ProductsRepository(),
  30_000
);
