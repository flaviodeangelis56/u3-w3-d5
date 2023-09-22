export const ADD_TRACK_TO_STATE = "ADD_TRACK_TO_STATE";
export const ADD_TRACK_TO_FAVORITE = "ADD_TRACK_TO_FAVORITE";

export const addTrackToState = data => ({ type: ADD_TRACK_TO_STATE, payload: data });
export const addTracktoFavorite = data => ({ type: ADD_TRACK_TO_FAVORITE, payload: data });
