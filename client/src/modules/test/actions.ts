import * as types from './types';

export const INITIALIZE_FORM = 'test/INITIALIZE_FORM' as const;
export const SAVE_PRIVACY = 'test/SAVE_PRIVACY' as const;
export const SAVE_ANSWER = 'test/SAVE_ANSWER' as const;

export const initializeForm = () => ({
  type: INITIALIZE_FORM,
});

export const savePrivacy = (privacyData: types.PrivacyForm) => ({
  type: SAVE_PRIVACY,
  payload: privacyData,
});

export const saveAnswer = (answerData: types.AnswerForm) => ({
  type: SAVE_ANSWER,
  payload: answerData,
});
