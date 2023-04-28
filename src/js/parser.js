export default function htmlparser(state) {
  const div = document.createElement('div');
  div.innerHTML = state.content;
  const items = div.querySelectorAll('item');
  const titles = [];
  const feeds = []
  div.querySelectorAll('channel').forEach((channel)=>{
    console.log(channel)
    feeds.push([
      channel.querySelector('title').textContent,
      channel.querySelector('description').textContent
    ])
  })
  items.forEach((item) => {
    titles.push([
      item.querySelector('title').textContent,
      item.querySelector('link').nextSibling.textContent.trim(),
      item.querySelector('description').textContent,
    ]);

  });
  return [titles,feeds];
}
