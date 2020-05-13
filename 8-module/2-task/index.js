import createElement from '../../assets/lib/create-element.js';
import ProductCard from '../../6-module/2-task/index.js';

export default class ProductGrid {
  constructor(products) {
    this.elem = document.createElement('div');
    this.elem.classList.add("products-grid");
    this.products = products;
    this.render(products);
    this.filters = {};
    /*let filters = {
      noNuts: true, // true/false
      vegeterianOnly: true, // true/false
      maxSpiciness: 3, // числа от 0 до 4
      category: 'soups' // уникальный идентификатор категории товара
    };
    this.updateFilter(filters);*/
  }

  render(products) {
    let inner = document.createElement('div');
    inner.classList.add("products-grid__inner");
    products.forEach((el) => {
      let card =  new ProductCard(el);

      inner.append(card.elem);

    });
    this.elem.append(inner);
  }

  updateFilter(filters) {
    let filteredProducts = this.products.filter((el) => {
      if (!filters.noNuts) return true;
      return filters.noNuts !== el.nuts;
    })
    .filter((el) => {
      if (!filters.vegeterianOnly) return true;
      return filters.vegeterianOnly === el.vegeterian;
    })
    .filter((el) => {
      if (!filters.maxSpiciness) return true;
      return filters.maxSpiciness >= el.spiciness;
    })
    .filter((el) => {
      if (!filters.category) return true;
      return filters.category === el.category;
    });
    this.elem.innerHTML = "";

    let inner = document.createElement('div');
    inner.classList.add("products-grid__inner");
    filteredProducts.forEach((el) => {
      let card =  new ProductCard(el);

      inner.append(card.elem);

    });
    this.elem.append(inner);
  }

  
}
