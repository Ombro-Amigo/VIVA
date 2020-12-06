import AsyncStorage from '@react-native-community/async-storage';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

// import { reduxFirestore, getFirestore } from 'redux-firestore';
// import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
// import firebase from '@react-native-firebase/app';
import rootReducer from './ducks';
import rootSaga from './sagas';

const persistConfig = {
	key: 'vivaUser',
	storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
