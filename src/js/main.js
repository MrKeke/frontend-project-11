import '../css/styles.scss';
import 'bootstrap';
import valid from './view.js';
import render from './render.js';
import elements from './elements.js';

let state = {
  status: {
    url: '',
    valid: '',
    errors: [],
  },
  content: '',
  post: [],
  inActivePost: [],
  poststatus: false,
  feedstatus: false,
};

// console.log(state.elements.btn);
elements('btn').addEventListener('click', async (e) => {
  e.preventDefault();
  const { value } = elements('input');
  state.status.url = value;
  elements('input').value = '';
  const { success, errors, content } = await valid(value);
  state.status.valid = success;
  state.content = content;
  state.status.errors = errors;
  const { newState } = render(state);
  state = Object.assign(state, newState);
});
