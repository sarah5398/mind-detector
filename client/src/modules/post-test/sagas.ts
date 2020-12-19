import * as actions from './actions';
import { postTestApi } from './api';

import { call, put, takeEvery } from 'redux-saga/effects';

function* postTestFuncSaga(action: ReturnType<typeof actions.postTest>) {
  try {
    const data = yield call(postTestApi, action.payload);
    yield put(actions.postTestSuccess());
    yield put(actions.fetchLevel(data.level));
    yield put(actions.fetchCenters(data.centers));
  } catch (e) {
    yield put(actions.postTestError(e));
  }
}
export function* postTestSaga() {
  yield takeEvery(actions.POST_TEST, postTestFuncSaga);
}
