import {
  GET_ITEMS,
  ADD_ITEM,
  DELETE_ITEM,
  ITEM_LOADING,
} from "../actions/types";

const initialState = {
  items: [],
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    case DELETE_ITEM:
      console.log("im okk action");
      return {
        ...state,
        items: state.items.filter((item) => item._id !== action.payload),
      };
    case ADD_ITEM:
      console.log("deb 4");
      return {
        ...state,
        items: [action.payload, ...state.items],
      };
    case ITEM_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
