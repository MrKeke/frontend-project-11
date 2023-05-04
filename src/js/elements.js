export default function elements(key) {
  const elements = {
    errorP: document.querySelector("#dangerError"),
    input: document.querySelector("input"),
    btn: document.querySelector("#add"),
    poster: document.querySelector(".posts"),
    feeds: document.querySelector(".feeds"),
    popUpDesc: document.querySelector('.text-break'),
    postBtns: document.querySelectorAll('.btn-sm'),
    body: document.querySelector('body'),
    divModal: document.querySelector('#modal')
  };
  return elements[key];
}
