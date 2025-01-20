const initialState = 0;
export const bankReducer = (state = initialState, action) => {
  console.log("paaaaaaayyyy", action.payload);
  if (action.type === "increase") {
    return state + action.payload;
  } else if (action.type === "decrease") {
    return state - action.payload;
  } else {
    return state;
  }
};

// // action type의 상수
// const DEPOSIT = "bank/DEPOSIT";
// const WITHDRAW = "bank/WITHDRAW";

// export const deposit = (payload) => ({
//   type: DEPOSIT,
//   payload: payload,
// });
// export const withdraw = (payload) => ({ type: WITHDRAW, payload });

// const initialState = 0;

// export const bankReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case DEPOSIT:
//       return state + action.payload;
//     case WITHDRAW:
//       return state - action.payload;
//     default:
//       return state;
//   }
// };
