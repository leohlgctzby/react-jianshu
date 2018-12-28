// const defaultState = {
//   focused: false
// };

// export default (state = defaultState, action) => {

//   // if(action.type === 'search_focus'){
//   //   return {
//   //     focused: true
//   //   };
//   // }

//   if(action.type === 'search_focus'){
//     return {
//       focused: true
//     };
//   }
//   console.log(state)
//   return state;
// }
const defaultState = {
  focused: false
};

export default (state = defaultState, action) => {
  if (action.type === "search_focus") {
    const newState = {
      focused: true
    };
    console.log(newState);
    return newState;
  }

  return state;
};
