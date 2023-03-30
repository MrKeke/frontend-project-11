import '../css/styles.scss';
import 'bootstrap';
import validator from './view.js';

const state = {
  valid: true,
};
const input = document.querySelector('input');

const btn = document.querySelector('button');
btn.addEventListener('click', (e) => {
  e.preventDefault();
  const { value } = input;
  input.value = '';
  // state.valid = validator(value)
  console.log(validator(value));
});
