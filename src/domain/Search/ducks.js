import Immutable from 'seamless-immutable';

export const Types = {
  GET_MOVIES: 'GET_MOVIES',
  SET_MOVIES: 'SET_MOVIES',
  SET_LOADING: 'SET_LOADING',
  SET_FAVORITES: 'SET_FAVORITES',
  SELECT_FAVORITES: 'SELECT_FAVORITES',
};

const initialState = Immutable({
  data: [],
  favorites: [],
  loading: false,
  listImd: [],
});

export default function search(state = initialState, action) {
  switch (action.type) {
    case Types.SET_MOVIES: {
      let info = action.payload.data;
      info.totalResults = parseInt(info.totalResults);
      return {
        ...state,
        data: info,
        loading: false,
      };
    }
    case Types.GET_MOVIES: {
      return {
        ...state,
        loading: true,
      };
    }
    case Types.SET_LOADING: {
      return {
        ...state,
        loading: action.payload.loading,
      };
    }
    case Types.SET_FAVORITES: {
      return {
        ...state,
        favorites: action.payload.favorites,
        listImd: action.payload.listImd,
      };
    }
    default:
      return state;
  }
}

export const Creators = {
  getMovies: (dataSearch = '', page = 1, handlePagination) => ({
    type: Types.GET_MOVIES,
    payload: {dataSearch, page, handlePagination},
  }),
  setMovies: (data = null) => ({
    type: Types.SET_MOVIES,
    payload: {data},
  }),
  setLoading: (loading = false) => ({
    type: Types.SET_LOADING,
    payload: {loading},
  }),
  setFavorite: (favorites, listImd) => ({
    type: Types.SET_FAVORITES,
    payload: {favorites, listImd},
  }),
  selectFavorites: (itemFavorite, allMovies) => ({
    type: Types.SELECT_FAVORITES,
    payload: {itemFavorite, allMovies},
  }),
};
