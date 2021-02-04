const redux = require("redux");

const initialState = {
  count: 0,
  favoriteThings: [],
};

function addFavoriteThing(thing) {
  return {
    type: "ADD_FAVORITE_THING",
    payload: thing,
  };
}

function removeFavoriteThing(thing) {
  return {
    type: "REMOVE_FAVORITE_THING",
    payLoad: thing,
  };
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_FAVORITE_THING": {
      return {
        ...state,
        favoriteThings: [...state.favoriteThings, action.payLoad],
      };
    }

    case "REMOVE_FAVORITE_THING":
      return {
        ...state,
        favoriteThings: state.favoriteThings.filter((thing) => thing !== action.payLoad),
      };

    default:
      return state;
  }
}

const store = redux.createStore(reducer);
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addFavoriteThing("akoho"));
store.dispatch(addFavoriteThing("hena"));
store.dispatch(removeFavoriteThing("akoho"));
