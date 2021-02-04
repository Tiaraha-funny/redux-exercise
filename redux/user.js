/**
 * Challenge:
 *
 * Create a new state property to hold the currently-logged-in user info. I.e. if our app wanted to allow a user to log in, we would likely want to keep track of some info from the logged in user. For this challenge, you'll save a user with these properties:
 * {
 *      firstName: ___,
 *      lastName: ___,
 *      id: ___,
 *      email: ___
 * }
 *
 * This will require
 *      (1) Creating a new file to hold our new Redux stuff re: the user (e.g. user.js),
 *      (2) Creating a new action creator (e.g. "setUserDetails"),
 *      (3) Creating a new reducer, and
 *      (4) Adding that reducer to our rootReducer with combineReducers
 */

export function setUserDetails(user) {
  return {
    type: "SET_USER_DETAILS",
    payLoad: user
  };
}

export function resetUserDetails() {
    return {
        type: "REMOVE_USER_DETAILS",
    }
}

const initialStateValue = {
  firstName: "",
  lastName: "",
  id: 1,
  email: "",
};

export default function setuserDetailsReducer(
  user = null,
  action
) {
  switch (action.type) {
    case "SET_USER_DETAILS":
      return {
        ...user,
        ...action.payLoad
      };
      case "REMOVE_USER_DETAILS": {
        return null
      }
    default:
      return user;
  }
}
