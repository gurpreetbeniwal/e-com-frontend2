export const initialState = {
  price: [0, 1000],
  categories: [],
  sortingOption: "Default",
  currentPage: 1,
  itemPerPage: 6, // ✅ Default minimum 6 products per page
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_PRICE":
      return { ...state, price: action.payload, currentPage: 1 }; // Reset to page 1 when price changes
    case "SET_CATEGORIES":
      return { ...state, categories: action.payload, currentPage: 1 }; // Reset to page 1 when categories change
    case "SET_SORTING_OPTION":
      return { ...state, sortingOption: action.payload, currentPage: 1 }; // Reset to page 1 when sorting changes
    case "SET_CURRENT_PAGE":
      return { ...state, currentPage: action.payload };
    case "SET_ITEM_PER_PAGE":
      const minItems = Math.max(action.payload, 6); // ✅ Ensure minimum 6 products per page
      return { ...state, itemPerPage: minItems };
    case "CLEAR_FILTER":
      return { 
        ...initialState, 
        currentPage: 1,
        itemPerPage: 6 // ✅ Keep minimum 6 when clearing filters
      };
    default:
      return state;
  }
};
