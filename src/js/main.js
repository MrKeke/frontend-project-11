import '../css/styles.scss';
import 'bootstrap';
import valid from './validator.js';
import render from './render.js';
import elements from './elements.js';
import postBtnsHandler from './ModalHandler.js';

let state = {
  lng: document.querySelector('html').lang,
  status: {
    url: [],
  },
  inActivePost: { post: [], feed: [] },
};
elements('btn').addEventListener('click', async (e) => {
  e.preventDefault();
  const { value } = elements('input');
  await valid(value);
  state.status.valid = success;
  state.content = content;
  state.status.errors = errors;
  const { newState } = render(state);
  state = Object.assign(state, newState);
  elements('input').value = '';
  postBtnsHandler(state);
});
