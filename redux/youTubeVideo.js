export function setYouTubeTitle(title) {
  return {
    type: "SET_YOUTUBE_TITLE",
    payload: title,
  };
}
export function incrementViewCount() {
  return {
    type: "INCREMENT_VIEW_COUNT",
  };
}
export function upvoteVideo() {
  return {
    type: "UPVOTE_VIDEO",
  };
}
export function downvoteVideo() {
  return {
    type: "DOWNVOTE_VIDEO",
  };
}

const initialState = {
  title: "",
  viewCount: 0,
  votes: {
    up: 0,
    down: 0,
  },
};

export default function YouTubeVideoReducer(youtubeVideo = initialState, action) {
  switch (action.type) {    
    case "INCREMENT_VIEW_COUNT":
      return {
        ...youtubeVideo,
        viewCount: youtubeVideo.viewCount + 1,
      };

    case "SET_YOUTUBE_TITLE":
      return {
        ...youtubeVideo,
        title: action.payload,
      };

    case "UPVOTE_VIDEO":
      return {
        ...youtubeVideo,
        votes: {
          ...youtubeVideo.votes,
          up: youtubeVideo.votes.up + 1,
        },
      };
    case "DOWNVOTE_VIDEO":
      return {
        ...youtubeVideo,
        votes: {
          ...youtubeVideo.votes,
          down: youtubeVideo.votes.down + 1,
        },
      };
    default:
      return youtubeVideo;
  }
}
