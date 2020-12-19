import * as actions from './actions';
import * as types from './types';

const initialState: any = {
  postStatus: {
    loading: false,
    success: false,
    error: null,
  },
  level: 0,
  centers: [],
};

const postTest = (
  state: types.PostTestState = initialState,
  action: types.PostTestAction
) => {
  switch (action.type) {
    case actions.POST_TEST:
      return {
        ...state,
        postStatus: {
          ...state.postStatus,
          loading: true,
        },
      };
    case actions.POST_TEST_SUCCESS:
      return {
        ...state,
        postStatus: {
          ...state.postStatus,
          loading: false,
          success: true,
        },
      };
    case actions.POST_TEST_ERROR:
      return {
        ...state,
        postStatus: {
          ...state.postStatus,
          loading: false,
          error: action.error,
        },
      };
    case actions.FETCH_LEVEL:
      console.log(action.payload);
      return {
        ...state,
        level: action.payload,
      };
    case actions.FETCH_CENTERS:
      return action.payload.map((center: any, idx: any) => {
        return {
          ...state,
          [center.centerid]: center,
        };
      });
    default:
      return state;
  }
};

export default postTest;
