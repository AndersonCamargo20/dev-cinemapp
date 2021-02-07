import {put, select, takeLatest, call} from 'redux-saga/effects';
import {Creators as SearchCreator, Types} from './ducks';
import {api} from '../../services/api';
import {dialog} from '../../utils/format';
import errorHandler from '../../repositories/error-handler';

export function* getMovies(action) {
  const {dataSearch, page, handlePagination} = action.payload;

  if (!dataSearch?.trim()) {
    dialog.toast('O campo de busca deve ser preeenchido para continuar!');
    return yield put(SearchCreator.setLoading(false));
  }

  //mosqueteiros

  const url = `http://www.omdbapi.com/?apikey=925eba28&s=${dataSearch}&page=${page}`;
  console.log('url: ', url);
  const response = yield call(api.get, url);

  if (response.ok && !response?.data?.Error) {
    yield put(SearchCreator.setMovies(response?.data));
    return handlePagination();
  } else {
    //TODO: MELHORAR TRATAMENTO DE ERROS
    // dialog.toast('Nenhuma obra encontrada, com o termo pesquisado', true);
    yield put(SearchCreator.setMovies([]));
    yield put(SearchCreator.setLoading(false));
    yield errorHandler(response);
  }

  ///MAP DE ERROS
  // {
  //     "Response": "False",
  //     "Error": "Incorrect IMDb ID."
  // }
}

export function* selectFavorites(action) {
  const {itemFavorite} = action.payload;
  const oldFavorites = yield select((state) => [...state.search.favorites]);
  const oldListImd = yield select((state) => [...state.search.listImd]);

  if (!oldListImd.includes(itemFavorite?.imdbID)) {
    oldFavorites.push({...itemFavorite});
    oldListImd.push(itemFavorite.imdbID);
    yield put(SearchCreator.setFavorite(oldFavorites, oldListImd));
  } else {
    console.log('ENTROU AQUI');
    const newFavorites = oldFavorites.filter((favorite) => {
      return itemFavorite?.imdbID !== favorite?.imdbID;
    });

    const newListImdb = oldListImd.filter((imdb) => {
      return itemFavorite?.imdbID !== imdb;
    });

    yield put(SearchCreator.setFavorite(newFavorites, newListImdb));
  }
}

const sagas = [
  takeLatest(Types.GET_MOVIES, getMovies),
  takeLatest(Types.SELECT_FAVORITES, selectFavorites),
];

export default sagas;
