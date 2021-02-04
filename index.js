import store from "./redux";
import { changeCount } from "./redux/count";
import { addFavoriteThing, removeFavoriteThing } from "./redux/favoriteThing";
import {
  setYouTubeTitle,
  incrementViewCount,
  upvoteVideo,
  downvoteVideo,
} from "./redux/youTubeVideo";

import { resetUserDetails, setUserDetails } from "./redux/user";

store.dispatch(
  setUserDetails({
    firstName: "Peta",
    lastName: "High",
    id: 5,
    email: "pet.je@onja.org",
  })
);

store.dispatch(resetUserDetails())

store.dispatch(changeCount(42));
store.dispatch(addFavoriteThing("fried chicken"));
store.dispatch(removeFavoriteThing("potatoes"));
store.dispatch(setYouTubeTitle("Love is blind"));
// store.dispatch(incrementViewCount(3));
// store.dispatch(upvoteVideo(4));
// store.dispatch(downvoteVideo(1));
