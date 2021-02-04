const redux = require("redux");
const { combineReducers, createStore } = redux;

import countReducer  from "./count";
import  favoriteThingsReducer  from "./favoriteThing";
import youTubeVideoReducer from "./youTubeVideo";

import setuserDetailsReducer, { resetUserDetails } from "./user";

const rootReducer = combineReducers({
  count: countReducer,
  favoriteThings: favoriteThingsReducer,
  youTubeVideo: youTubeVideoReducer,
  user: setuserDetailsReducer,
  user: resetUserDetails,
})

const store = createStore(rootReducer);

store.subscribe(() => {
  console.log(store.getState());
});

export default store;

// 
// store.dispatch(changeCount())