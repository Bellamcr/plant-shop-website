export const CartReducer = (state, action) => {
  const { shoppingCart, totalPrice, totalQty } = state;
  let product = {};
  let index = -1;
  let updatedTotalPrice = 0;
  let updatedTotalQty = 0;

  switch (action.type) {
    case "ADD_TO_CART":
      product = { ...action.product };
      product["qty"] = 1;
      updatedTotalQty = totalQty + 1;
      updatedTotalPrice = totalPrice + product.ProductPrice;
      return {
        shoppingCart: [product, ...shoppingCart],
        totalPrice: updatedTotalPrice,
        totalQty: updatedTotalQty,
      };
      break;

    case "INC":
      product = { ...action.product };
      product.qty += 1;
      updatedTotalQty = totalQty + 1;
      updatedTotalPrice = totalPrice + product.ProductPrice;
      index = shoppingCart.findIndex((product) => product.id === action.id);
      shoppingCart[index] = product;
      return {
        shoppingCart: [...shoppingCart],
        totalPrice: updatedTotalPrice,
        totalQty: updatedTotalQty,
      };
      break;

    case "DEC":
      product = { ...action.product };
      if (product.qty > 1) {
        product.qty = product.qty - 1;
        updatedTotalPrice = totalPrice - product.ProductPrice;
        updatedTotalQty = totalQty - 1;
        index = shoppingCart.findIndex((product) => product.id === action.id);
        shoppingCart[index] = product;
        return {
          shoppingCart: [...shoppingCart],
          totalPrice: updatedTotalPrice,
          totalQty: updatedTotalQty,
        };
      } else {
        return state;
      }
      break;

    case "DELETE":
      const filtered = shoppingCart.filter(
        (product) => product.id !== action.id
      );
      product = { ...action.product };
      updatedTotalQty = totalQty - product.qty;
      updatedTotalPrice = totalPrice - product.qty * product.ProductPrice;
      return {
        shoppingCart: [...filtered],
        totalPrice: updatedTotalPrice,
        totalQty: updatedTotalQty,
      };
      break;

    case "EMPTY":
      return {
        shoppingCart: [],
        totalPrice: 0,
        totalQty: 0,
      };

    default:
      return state;
  }
};
