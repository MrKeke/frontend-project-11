import _ from 'lodash';
import errorHandler from './ErrorHandler.js';
import htmlparser from './parser.js';
import { createPosts } from './post.js';

export default function render(state) {
  if (errorHandler(state)) {
    const [post, feeds] = htmlparser(state);
    state.post.unshift(...post);
    state.feed = feeds;
    const {
      activefeed, titile, poststatus, feedstatus,
    } = createPosts(state);
    state.poststatus = poststatus;
    state.feedstatus = feedstatus;
    state.inActivePost.post.push(...titile);
    state.inActivePost.feed.push(...activefeed);
    return state;
  }
  return state;
}
