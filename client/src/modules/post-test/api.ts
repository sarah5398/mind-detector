import * as types from './types';
import axios from 'axios';

export async function postTestApi(form: types.TestForm) {
  console.log(form);
  const privacyObj = form.privacy;
  const answersObj = form.answers;
  const data = {
    headers: { 'Content-Type': 'application/json' },
    privacy: privacyObj,
    answers: answersObj,
  };
  const response = await axios.post('https://api.minddetector.me/test', data);
  return response.data;
}
