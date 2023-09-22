import { ADD_TRACK_TO_FAVORITE, ADD_TRACK_TO_STATE } from "../actions";

const iState = {
  jobs: {
    content: [],
    favorite: [],
  },
};

const mainReducer = (state = iState, action) => {
  switch (action.type) {
    case ADD_TRACK_TO_STATE:
      return {
        ...state,
        jobs: {
          ...state.jobs,
          content: [action.payload],
          favorite: [...state.jobs.favorite],
        },
      };

    case ADD_TRACK_TO_FAVORITE:
      return {
        ...state,
        jobs: {
          ...state.jobs,
          content: [...state.jobs.content],
          favorite: [...state.jobs.favorite, action.payload],
        },
      };

    default:
      return state;
  }
};
export default mainReducer;
