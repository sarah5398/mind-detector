import * as types from './types';
import { AxiosError } from 'axios';

export const POST_TEST = 'post-test/POST_TEST' as const;
export const POST_TEST_SUCCESS = 'post-test/POST_TEST_SUCCESS' as const;
export const POST_TEST_ERROR = 'post-test/POST_TEST_ERROR' as const;
export const FETCH_LEVEL = 'post-test/FETCH_LEVEL' as const;
export const FETCH_CENTERS = 'post-test/FETCH_CENTERS' as const;

export const postTest = (TestForm: types.TestForm) => {
  console.log('서버 요청 중..');
  return {
    type: POST_TEST,
    payload: TestForm,
  };
};

export const postTestSuccess = () => {
  console.log('post 완료!');
  return {
    type: POST_TEST_SUCCESS,
  };
};

export const postTestError = (error: AxiosError) => {
  console.log('post 실패');
  return {
    type: POST_TEST_ERROR,
    error: error,
  };
};

export const fetchLevel = (level: any) => {
  console.log('fetch 완료!');
  return {
    type: FETCH_LEVEL,
    payload: level,
  };
};

export const fetchCenters = (centers: any) => {
  console.log('fetch 완료!');
  return {
    type: FETCH_CENTERS,
    payload: centers,
  };
};
