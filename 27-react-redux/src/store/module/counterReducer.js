//1. reducer uusgeh
//2. buh reducer-uudiig store/index.js-d negtgej uguh

const initialState = 1;
export const counterReducer = (state = initialState, action) => {
  if (action.type === "count/DECREMENT") {
    return state - 1;
  } else if (action.type === "count/INCREMENT") {
    return state + 1;
  } else {
    return state;
  }
};
