import { Type } from "./action.type";
export const initialState = {
  basket: [],
};
export const reducer = (state, action) => {
  switch (action.type) {
    case Type.ADD_TO_BASKET:
      const existingItem = state.basket.find((item) => {
        return item.id === action.item.id;
      });

      if (existingItem) {
        return {
          ...state,

          basket: state.basket.map((item) => {
            if (item.id === action.item.id) {
              return {
                ...item,
                quantity: item.quantity + 1,
              };
            }

            return item;
          }),
        };
      }
      return {
        ...state,
        basket: [
          ...state.basket,

          {
            ...action.item,
            quantity: 1,
          },
        ],
      };
    case Type.INCREASE_QUANTITY:
      return {
        ...state,
        basket: state.basket.map((item) => {
          if (item.id == action.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        }),
      };
    case Type.DECREASE_QUANTITY:
      return {
        ...state,
        basket: state.basket.map((item) => {
          if (item.id == action.id) {
            return {
              ...item,
              quantity: item.quantity > 1 ? item.quantity - 1 : 1,
            };
          }
          return item;
        }),
      };

    case Type.REMOVE_FROM_BASKET:
      return {
        ...state,
        basket: state.basket.filter((item) => {
          return item.id !== action.id;
        }),
      };

    default:
      return state;
  }
};
