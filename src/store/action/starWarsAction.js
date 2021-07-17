import {
  LOAD_FILMS,
  LOAD_CHAR,
  LOADING_DATA,
  LOAD_FILMS_PLAY_BYCHAR,
  LOAD_CHAR_PLAY_BYFILMS
} from "./actionType";
import { urlCharacter, urlFilms } from "../../helpers/urlConfig";

export function loadChar(data) {
  return {
    type: LOAD_CHAR,
    payload: data,
  };
}

export function loadCharPlayByFilms(data) {
  return {
    type: LOAD_CHAR_PLAY_BYFILMS,
    payload: data,
  };
}

export function loadfilmsPlayByChar(data) {
  return {
    type: LOAD_FILMS_PLAY_BYCHAR,
    payload: data,
  };
}

export function loadFilms(data) {
  return {
    type: LOAD_FILMS,
    payload: data,
  };
}


export function loadingData(data) {
  return {
    type: LOADING_DATA,
    payload: data,
  };
}

export function fetchChar() {
  return async (dispatch) => {
    dispatch(loadingData(true));
    const res = await fetch(urlCharacter);
    const data = await res.json();
    const results = data.results.map((val) => {
      return val.films;
    });

    dispatch(fetchMoviesPlayByChar(results));

    function fetchMoviesPlayByChar(results) {
      return (dispatch) => {
        let arr = [];
        for (let i = 0; i < results.length; i++) {
          let theData = results[i];

          theData.forEach(async (movieUrl) => {
            const res = await fetch(movieUrl);
            const datas = await res.json();
            arr.push({ id: i, datas });
            dispatch(loadfilmsPlayByChar(arr));
          });
        }
        let apiData = data.results.map((value, index) => {
          return {
            id: index,
            name: value.name,
            character: value.character,
            films: arr,
            mass: value.mass,
            height: value.height,
            birth_year: value.birth_year,
            eye_color: value.eye_color,
            hair_color: value.hair_color,
          };
        });
        dispatch(loadChar(apiData));
        dispatch(loadingData(false));
      };
    }
  };
}

export function fetchFilms() {
  return async (dispatch) => {
    dispatch(loadingData(true));
    const res = await fetch(urlFilms);
    const data = await res.json();
    const results = data.results.map((val) => {
      return val.characters;
    });
    dispatch(fetchCharPlayByMovies(results));

    function fetchCharPlayByMovies(results) {
      return (dispatch) => {
        let arr = [];
        for (let i = 0; i < results.length; i++) {
          let theData = results[i];

          theData.forEach(async (movieUrl) => {
            const res = await fetch(movieUrl);
            const datas = await res.json();
            arr.push({ id: i, datas });
            dispatch(loadCharPlayByFilms(arr));
          });
        }
        let apiData = data.results.map((value, index) => {
          return {
            id: index,
            title: value.title,
            character: arr,
            director: value.director,
            producer: value.producer,
            release_date: value.release_date,
            opening: value.opening_crawl,
          };
        });
        dispatch(loadFilms(apiData));
        dispatch(loadingData(false));
      };
    }
  };
}
