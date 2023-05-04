export default function elements(key) {
  const element = {
    errorP: document.querySelector('#dangerError'),
    input: document.querySelector('input'),
    btn: document.querySelector('#add'),
    poster: document.querySelector('.posts'),
    feeds: document.querySelector('.feeds'),
    popUpDesc: document.querySelector('.text-break'),
    postBtns: document.querySelectorAll('.btn-sm'),
    body: document.querySelector('body'),
    mTitle: document.querySelector('.modal-title'),
    mBody: document.querySelector('.modal-body'),
    mHref: document.querySelector('.full-article'),
  };
  return element[key];
}
