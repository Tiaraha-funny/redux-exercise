const redux = require("redux");
console.log("Hello redux", redux);

function increment(amount) {
  return {
    type: "INCREMENT",
    payLoad: amount,
  };
}

function decrement() {
  return {
    type: "DECREMENT",
  };
}

function double() {
  return {
    type: "DOUBLE",
  };
}

function halve() {
  return {
    type: "HALVE",
  };
}

function changeCount(amount) {
  return {
    type: "CHANGE_COUNT",
    payLoad: amount,
  };
}

function addFavoriteThing(thing) {
  return {
    type: "ADD_FAVORITE_THING",
    payLoad: thing
  }
}

const initialState = {
  count: 0,
  favoriteThings: []
}


function reducer(state = initialState, action) {
  //return new state based on the incoming action.type
  switch (action.type) {
    case "CHANGE_COUNT": {
      return {
        count: state.count + action.payLoad,
      };
    }

    case "ADD_FAVORITE_THING": {
      return {
        ...state,
        favoriteThings: [...state.favoriteThings, action.payLoad]
      }
    }

    default: {
      return state;
    }
  }
}

  const store = redux.createStore(reducer);
console.log("store reducer", store);

store.subscribe(() => {
  console.log("get the state from the store", store.getState());
});

store.dispatch(changeCount(5)); //whatever the amount you want to increment it.
store.dispatch(addFavoriteThing("akoho"));

  // **** It is similar with if else statement **** //

  // if (action.type === "INCREMENT") {
  //   return {
  //     count: state.count + 1,
  //   };
  // } else if (action.type === "DECREMENT") {
  //   return {
  //     count: state.count - 1,
  //   };
  // }

console.log(increment(), decrement());

//*** First thing that you need to know */

// store.dispatch({type: "INCREMENT"});
// store.dispatch(double());
// store.dispatch(double());
// store.dispatch({type: "DECREMENT"});
// store.dispatch(halve());
