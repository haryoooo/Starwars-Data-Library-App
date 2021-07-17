import {
  LOAD_FILMS,
  LOADING_DATA,
  LOAD_CHAR,
  LOAD_FILMS_PLAY_BYCHAR,
  LOAD_CHAR_PLAY_BYFILMS,
} from "../action/actionType";

const initialState = {
  film: [],
  character: [],
  charFilm: [],
  filmChar: [],
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        isLoading: action.payload,
      };

    case LOAD_CHAR:
      return {
        ...state,
        character: action.payload,
      };

    case LOAD_FILMS_PLAY_BYCHAR:
      return {
        ...state,
        charFilm: action.payload,
      };

    case LOAD_FILMS:
      return {
        ...state,
        film: action.payload,
      };

    case LOAD_CHAR_PLAY_BYFILMS:
      return {
        ...state,
        filmChar: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};
