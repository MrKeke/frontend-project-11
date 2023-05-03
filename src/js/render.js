import _ from 'lodash';
import errorHandler from './ErrorHandler.js';
import htmlparser from './parser.js';
import { createPosts } from './post.js';

export default function render(state) {
  if (errorHandler(state)) {
    const [post,feeds] = htmlparser(state)
    state.post = post;
    // console.log(htmlparser(state));
    state.feed = feeds
    console.log(state.feed)
    const { title, poststatus, feedstatus } = createPosts(state);
    state.poststatus = poststatus;
    state.feedstatus = feedstatus;
    state.inActivePost.push(title);
    return state;
  }
  return state;
}
