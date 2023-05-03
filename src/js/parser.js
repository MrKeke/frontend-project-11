export default function htmlparser(state) {
  const div = document.createElement('div');
  div.innerHTML = state.content;
  const items = div.querySelectorAll('item');
  const post = [];
  const feeds = [];
  div.querySelectorAll('channel').forEach((channel) => {
    feeds.push([
      channel.querySelector('title').textContent,
      channel.querySelector('description').textContent,
    ]);
  });
  items.forEach((item) => {
    post.push([
      item.querySelector('title').textContent,
      item.querySelector('link').nextSibling.textContent.trim(),
      item.querySelector('description').textContent,
    ]);
  });
  // console.log(feeds);
  // console.log(post)
  return [post, feeds];
}
