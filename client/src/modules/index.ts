import postTest, { postTestSaga } from './post-test';
import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import test from './test';

const rootReducer = combineReducers({ test, postTest });

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
  yield all([postTestSaga()]);
}
