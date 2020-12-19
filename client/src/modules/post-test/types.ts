import * as actions from './actions';
import * as testTypes from '../test/types';
export type TestForm = testTypes.TestForm;

export type PostTestAction =
  | ReturnType<typeof actions.postTest>
  | ReturnType<typeof actions.postTestSuccess>
  | ReturnType<typeof actions.postTestError>
  | ReturnType<typeof actions.fetchLevel>
  | ReturnType<typeof actions.fetchCenters>;

export interface PostTestState {
  postStatus: {
    loading: boolean;
    success: boolean;
    error: Error | null;
  };
}
