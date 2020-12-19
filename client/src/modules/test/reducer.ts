import * as actions from './actions';
import * as types from './types';

// 초기 상태 선언
const initialForm: types.TestForm = {
  privacy: {
    age: '',
    sex: '',
    province: '',
    job: '',
    city: '',
  },
  answers: {
    answer1: '',
    answer2: '',
    answer3: '',
    answer4: '',
    answer5: '',
    answer6: '',
    answer7: '',
    answer8: '',
    answer9: '',
    answer10: '',
  },
};

// 리듀서 작성
function study(
  state: types.TestForm = initialForm,
  action: types.FormAction
): types.TestForm {
  switch (action.type) {
    case actions.SAVE_PRIVACY:
      return {
        ...state,
        privacy: {
          sex: action.payload.sex,
          age: action.payload.age,
          job: action.payload.age,
          province: action.payload.province,
          city: action.payload.city,
        },
      };
    case actions.SAVE_ANSWER:
      console.log('test');
      const pageKey = action.payload.pageKey;
      const answer = action.payload.answer;
      return {
        ...state,
        answers: {
          ...state.answers,
          [pageKey]: answer,
        },
      };
    case actions.INITIALIZE_FORM:
      return initialForm;
    default:
      return state;
  }
}

export default study;
