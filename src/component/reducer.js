export const initialState = {
  basket: [],
};
//selector
export const getBasketTotal = (basket) =>
  basket?.reduce((acc, item) => item.price + acc, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      console.log(state.basket);
      const findKey = state.basket.findIndex(
        (obj) => obj.id === action.item.id
      );
      console.log(findKey);
      if (findKey !== -1) {
        const newState = [
          ...state.basket.slice(0, findKey),
          {
            ...state.basket[findKey],
            qty: parseInt(state.basket[findKey].qty) + 1,
            price: state.basket[findKey].price + state.basket[findKey].oriPrice,
          },
          ...state.basket.slice(findKey + 1),
        ];
        return { ...state, basket: newState };
      }
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.id}) as its not in basket!`
        );
      }
      return { ...state, basket: newBasket };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "CHANGE_QTY":
      const findKeyForQty = state.basket.findIndex(
        (obj) => obj.id === action.id
      );
      const newState = [
        ...state.basket.slice(0, findKeyForQty),
        {
          ...state.basket[findKeyForQty],
          qty: parseInt(action.qty),
          price: state.basket[findKeyForQty].oriPrice * action.qty,
        },
        ...state.basket.slice(findKeyForQty + 1),
      ];
      return { ...state, basket: newState };

    default:
      return state;
  }
};
export default reducer;
