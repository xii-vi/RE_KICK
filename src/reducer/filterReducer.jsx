
export const FilterReducer = (state, Action)  =>{ 

    switch (Action.type) {
      case "CATEGORY": 
            return state.category.includes(Action.payload)? {...state,category:[...state.category.filter(item => item !== Action.payload)]} : { ...state, category: [...state.category, Action.payload] }
      case "SORT":
        return { ...state, sortBy: Action.payload };
      case "GENDER":
        return { ...state, gender: Action.payload };
      case "PRICE_RANGE":
            return {...state, priceRange:Action.payload};
      case "RATING":
            return {...state, rating:Action.payload};
      case "BRAND": 
            return state.brand.includes(Action.payload)? {...state,brand:[...state.brand.filter(item => item !== Action.payload)]} : { ...state, brand: [...state.brand, Action.payload] }
      case "RESET":
        return {
          ...state,
          category: "",
          sortBy: "",
          gender: "",
          priceRange: 50000,
          rating: 1,
          brand: "",
        };
      default:
        return state ;
    }
  }
