import {createStore, applyMiddleware} from 'redux';
import {persistStore} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import {middleware as navMiddleware} from '../routes';

import ducks from './ducks';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const middleware = [navMiddleware, sagaMiddleware];

const store = createStore(ducks, applyMiddleware(...middleware));

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export {store, persistor};
