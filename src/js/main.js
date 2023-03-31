import '../css/styles.scss';
import 'bootstrap';
import valid from './view.js';
import errorHandler from './ErrorHandler.js'

const state = {
  status: {
    url:'',
    valid: '',
    errors: '',
  }
};

console.log(state.elements.btn);
state.elements.btn.addEventListener('click', async (e) => {
  e.preventDefault();
  const { value } = state.elements.input;
  state.status.url = value
  state.elements.input.value = '';
  const { success, errors } = await valid(value);
  state.status.valid = success;
  state.status.errors = errors;
  console.log(state.status)
});
