import elements from './elements.js';

export function createPosts(state) {
  const [posts] = state.post;
  const postDiv = document.createElement('div');
  postDiv.classList.add('card', 'border-0');
  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');
  const posth2 = document.createElement('h2');
  posth2.classList.add('card-title', 'h4');
  posth2.textContent = 'Посты';
  const postUl = document.createElement('ul');
  postUl.classList.add('list-group', 'border-0', 'rounded-0');
  if (!state.poststatus) {
    postDiv.prepend(cardBody);
    elements('poster').append(postDiv);
    cardBody.append(posth2);
    cardBody.append(postUl);
  }
  const feedsDiv = document.createElement('div');
  feedsDiv.classList.add('card', 'border-0');
  const feedDiv = document.createElement('div');
  feedDiv.classList.add('card-body');
  const feedh2 = document.createElement('h2');
  feedh2.classList.add('card-titile', 'h4');
  feedh2.textContent = 'Фиды';
  const feedUl = document.createElement('ul');
  feedUl.classList.add('list-group', 'border-0', 'rounded-0');
  if (!state.feedstatus) {
    elements('feeds').append(feedsDiv);
    feedDiv.append(feedh2);
    feedsDiv.append(feedDiv);
    feedsDiv.append(feedUl);
  }
  const feeds = '';
  const titile = posts.reverse().map(([title, link, description]) => {
    const postLi = document.createElement('li');
    postLi.classList.add(
      'list-group-item',
      'd-flex',
      'justify-content-between',
      'align-items-start',
      'border-0',
      'border-end-0',
    );
    const postA = document.createElement('a');
    postA.classList.add('fw-bold');
    postA.href = link;
    postA.textContent = title;
    postA.setAttribute('target', '_blank');
    postA.rel = 'noopener noreferrer';
    postLi.prepend(postA);
    const postBtn = document.createElement('button');
    postBtn.classList.add('btn', 'btn-outline-primary', 'btn-sm');
    postBtn.setAttribute('type', 'button');
    postBtn.setAttribute('data-bs-target', '#modal');
    postBtn.setAttribute('data-bs-toogle', 'modal');
    postBtn.textContent = 'Просмотр';
    postLi.append(postBtn);
    document.querySelector('ul').prepend(postLi);
    return title;
  });
  return { titile, poststatus: true, feedstatus: true };
}
