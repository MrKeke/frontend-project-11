import elements from './elements.js';

export default function postBtnsHandler(state) {
  const { post } = state;
  elements('postBtns').forEach((postBtn) => {
    postBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const index = e.target.id;
      const [title, href, body] = post[index];
      elements('mTitle').textContent = title;
      console.log(elements('mHref'));
      elements('mHref').href = href;
      elements('mBody').textContent = body;
      e.target.previousSibling.classList.remove('fw-bold');
      e.target.previousSibling.classList.add('fw-normal', 'link-secondary');
    });
  });
  document.querySelectorAll('.fw-bold').forEach((a) => {
    a.addEventListener('click', (e) => {
      e.target.classList.remove('fw-bold');
      e.target.classList.add('fw-normal', 'link-secondary');
    });
  });
}
