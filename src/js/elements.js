export default function elements(key) {
  const elements = {
    errorP: document.querySelector('#dangerError'),
    input: document.querySelector('input'),
    btn: document.querySelector('#add'),
    poster: document.querySelector('.posts'),
    feeds: document.querySelector('.feeds'),
  };
  return elements[key];
}
