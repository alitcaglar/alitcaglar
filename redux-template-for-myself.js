//      // useSelector icin //
//  import { useSelector } from "react-redux";

//-------------------------------------------------

//      // index.js //

// import React from "react";
// import ReactDOM from "react-dom/client";
// import { Provider } from "react-redux";
// import "./index.css";
// import App from "./App";
// import store from "./store";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>
// );

//-------------------------------------------------

//      // store.js //

// import { configureStore } from "@reduxjs/toolkit";
// import abcReducer from "./features/abcs/abcSlice";

// const store = configureStore({
//     reducer: {
//       abc: abcReducer,
//     },
//   });
// export default store;

//-------------------------------------------------

//      // App.js //

//import AbcOperations from "./features/accounts/AbcOperations";
//import AbcDisplay from "./features/accounts/AbcDisplay";

// function App() {
//   return (
//     <div>
//       <AbcOperations />
//       <AbcDisplay />
//     </div>
//   );
// }

// export default App;

//-------------------------------------------------

//      // abcSlice.js //
//
//import { createSlice } from "@reduxjs/toolkit";

//const initialState = {
//     ini1 : 0,
//     ini2 : "",
//   };

//const abcSlice = createSlice({
// name: "abc",
// initialState,
// reducers: {

// // tek cikisli
//   reduce1(state, action) {
//     state./*sta*/ += action.payload;
//   },
// // cok cikisli
//   reduce 2: {
//     prepare(param1, param2) {
//         return {
//           payload: { param1, param2 },
//         };
//       },

//       reducer(state, action) {
//         if (state.loan > 0) return;

//         state.xyz = action.payload.param1;
//         state.ijk = action.payload.param2;
//       },
//     },
//
//  export const { reduce1,reduce2 ..... } = accountSlice.actions;

// //  cift parametre cift cikis icin thunk //

//export function deposit(amount, currency) {

//     return async function (dispatch, getState) {
//       dispatch({ type: "abc/loadingAbc" });

//       const res = await fetch(
//         `***url***`
//       );
//       const data = await res.json();
//       const sta = data.***.***;

//       dispatch({ type: "abc/reduce1", payload: sta });
//     };
//   }

//   export default accountSlice.reducer;

//-------------------------------------------------

//  // AbcOperations.js //

// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { ini1,ini2 } from "./abcSlice";

//  const [st, setSt] = useState("");

//  const {
// //selectors
//   } = useSelector((store) => store.abc);
//
// function handleReduce1() {
//     dispatch(reduce1(param1, param2));.....
// }
//
//// function handleReduce2() {
//     dispatch(reduce2(param1, param2));.....
// }
//

// return (<div></div>)

//  export default AbcOperations

