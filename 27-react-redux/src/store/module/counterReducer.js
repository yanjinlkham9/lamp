const initialState = 1;
export const counterReducer = (state = initialState, reducer) => {
  if (reducer.type === "count/DECREMENT") {
    return state - 1;
  } else if (reducer.type === "count/INCREMENT") {
    return state + 1;
  } else {
    return state;
  }
};
