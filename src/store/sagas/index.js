import {all} from 'redux-saga/effects';
import Search from '../../domain/Search/saga';

export default function* rootSaga() {
  yield all([...Search]);
}
