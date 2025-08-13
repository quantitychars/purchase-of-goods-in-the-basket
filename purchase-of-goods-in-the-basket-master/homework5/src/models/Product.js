// src/models/Product.js
export default class Product {
  constructor({ id, title, price, image, sku, copy }) {
    Object.assign(this, { id, title, price, image, sku, copy });
  }

  getFormattedPrice(locale = "uk-UA", currency = "UAH") {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
      minimumFractionDigits: 2,
    }).format(this.price);
  }

  containsWord(word) {
    return this.copy?.toLowerCase().includes(word.toLowerCase());
  }
}
