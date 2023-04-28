import elements from './elements.js';

export default function errorHandler(state) {
  if (state.status.errors.includes('invalid')) {
    elements('errorP').classList.add('text-danger');
    elements('errorP').classList.remove('text-success');
    elements('errorP').textContent = 'Ресурс не содержит валидный RSS';
    return false;
  } if (state.status.errors.includes('not URL')) {
    elements('errorP').classList.add('text-danger');
    elements('errorP').classList.remove('text-success');
    elements('errorP').textContent = 'Ссылка должна быть валидным URL';
    return false;
  }
  // else if(false){
  // elements("errorP").classList.add('text-danger')
  // elements("errorP").classList.remove('text-success')
  // elements("errorP").textContent = "'RSS уже существует'";
  // return false
  // }
  if (state.status.valid) {
    elements('errorP').textContent = 'RSS успешно загружен';
    elements('errorP').classList.add('text-success');
    elements('errorP').classList.remove('text-danger');
    return true;
  }
  throw new Error('Что-то пошло не такq');
}
