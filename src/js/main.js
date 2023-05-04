import '../css/styles.scss';
import 'bootstrap';
import valid from './view.js';
import render from './render.js';
import elements from './elements.js';

let state = {
  status: {
    url: [],
    valid: '',
    errors: [],
  },
  content: '',
  post: [],
  feed: [],
  inActivePost: { post: [], feed: [] },
  poststatus: false,
  feedstatus: false,
};

// console.log(state.elements.btn);
elements('btn').addEventListener('click', async (e) => {
  e.preventDefault();
  const { value } = elements('input');
  const { success, errors, content } = await valid(value);
  state.status.valid = success;
  state.content = content;
  state.status.errors = errors;
  //
  if (state.status.url.includes(value)) {
    state.status.errors.push('RSS include');
    console.log(state.status.url);
  } else state.status.url.push(value);
  const { newState } = render(state);
  state = Object.assign(state, newState);
  console.log(state.inActivePost);
  elements('input').value = '';
});
