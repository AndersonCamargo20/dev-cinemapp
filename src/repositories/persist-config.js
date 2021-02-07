import {createTransform} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const transformConfig = createTransform(
  (inboundState, key) => {
    if (key === 'search') {
      return {...inboundState};
    }

    return {...inboundState};
  },
  (outboundState) => outboundState,
);

export const persistConfig = {
  key: 'root',
  storage,
  transforms: [transformConfig],
  whitelist: ['search'],
};
