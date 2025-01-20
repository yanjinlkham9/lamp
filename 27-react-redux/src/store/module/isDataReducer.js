const initialState = false;
export const isDataReducer = (state = initialState, action) => {
  console.log(action);
  console.log("action type", action.type);
  if (action.type === "isData/CHANGE") {
    return (state = !state);
  } else {
    return state;
  }
};
