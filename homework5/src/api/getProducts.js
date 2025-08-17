let cache = null;

export async function getProducts() {
  if (cache) return cache; // вже завантажували → віддаємо

  const res = await fetch("/products.json");
  if (!res.ok) throw new Error("Failed to load products.json");
  cache = await res.json(); // [{ id, title, price, image… }]
  return cache;
}
