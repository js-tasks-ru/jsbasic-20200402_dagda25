export default class Cart {
  cartItems = []; // [product: {...}, count: N]

  constructor(cartIcon) {
    this.cartIcon = cartIcon;
  }

  addProduct(product) {
    let isNew = 1;
    let cartItem = {};

    for (let item of this.cartItems) {
      if (item.product.id === product.id) {
        item.count++;
        cartItem = item;
        isNew = 0;
        break;
      }
    }

    if (isNew) {
      cartItem = {product: product, count: 1};
      this.cartItems.push(cartItem);
    }

    this.onProductUpdate(cartItem);
   }

  updateProductCount(productId, amount) {
    let cartItem = {};

    for (let i = 0; i < this.cartItems.length; i++) {
      if (this.cartItems[i].product.id !== productId) continue; 
      this.cartItems[i].count = this.cartItems[i].count + amount;
      cartItem = this.cartItems[i];

      if (this.cartItems[i].count >= 1) break;

      this.cartItems.splice(i, 1);
      break; 
    }

    this.onProductUpdate(cartItem);

  }

  isEmpty() {
    return this.cartItems.length === 0;
  }

  getTotalCount() {
    let totalCount = 0; 

    for (let item of this.cartItems) {
      totalCount += item.count;
    }; 

    return totalCount;
  }

  getTotalPrice() {
    let totalPrice = 0; 

    for (let item of this.cartItems) {
      totalPrice += item.count * item.product.price;
    }; 

    return totalPrice;
  }

  onProductUpdate() {
    // реализуем в следующей задаче

    this.cartIcon.update(this);
  }
}

