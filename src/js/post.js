import elements from './elements.js';

let i = 0;
export function createPosts(state) {
  const posts = state.post;
  const { feed } = state;
  const checkinclude = (key) => state.inActivePost.post.includes(key);
  const postDiv = document.createElement('div');
  postDiv.classList.add('card', 'border-0');
  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');
  const posth2 = document.createElement('h2');
  posth2.classList.add('card-title', 'h4');
  posth2.textContent = 'Посты';
  const postUl = document.createElement('ul');
  postUl.classList.add('list-group', 'border-0', 'rounded-0');
  const feedsDiv = document.createElement('div');
  feedsDiv.classList.add('card', 'border-0');
  const feedDiv = document.createElement('div');
  feedDiv.classList.add('card-body');
  const feedh2 = document.createElement('h2');
  feedh2.classList.add('card-titile', 'h4');
  feedh2.textContent = 'Фиды';
  const feedUl = document.createElement('ul');
  feedUl.classList.add('list-group', 'border-0', 'rounded-0');
  feedUl.setAttribute('id', 'feedUl');
  console.log(elements('poster').innerHTML)
  if (!elements('poster').innerHTML.includes('h4')) {
    postDiv.prepend(cardBody);
    elements('poster').append(postDiv);
    cardBody.append(posth2);
    cardBody.append(postUl);
    elements('feeds').append(feedsDiv);
    feedDiv.append(feedh2);
    feedsDiv.append(feedDiv);
    feedsDiv.append(feedUl);
  }

  const activefeed = feed.reverse().map(([titile, desc]) => {
    const feedLi = document.createElement('li');
    feedLi.classList.add('list-group-item', 'border-0', 'border-end-0');
    const feedH3 = document.createElement('h3');
    feedH3.classList.add('h6', 'm-0');
    feedH3.textContent = titile;
    feedLi.prepend(feedH3);
    const feedp = document.createElement('p');
    feedp.classList.add('m-0', 'small', 'text-black-50');
    feedp.textContent = desc;
    feedLi.append(feedp);
    document.querySelector('#feedUl').prepend(feedLi);
    return titile;
  });
  const titile = posts.reverse().flatMap((stack) => {
    const [title, link, description] = stack;
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
    if (checkinclude(postA.textContent)) return [];
    postA.setAttribute('target', '_blank');
    postA.rel = 'noopener noreferrer';
    postLi.prepend(postA);
    const postBtn = document.createElement('button');
    postBtn.classList.add('btn', 'btn-outline-primary', 'btn-sm');
    postBtn.setAttribute('type', 'button');
    postBtn.setAttribute('data-bs-toggle', 'modal');
    postBtn.setAttribute('data-bs-target', '#modal');
    postBtn.textContent = 'Просмотр';
    postBtn.setAttribute('id', i);
    i += 1;
    postLi.append(postBtn);
    document.querySelector('ul').prepend(postLi);
    return [title, description];
  });
  return {
    activefeed,
    titile,
    poststatus: true,
    feedstatus: true,
  };
}
