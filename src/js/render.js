import _ from 'lodash';
import errorHandler from './ErrorHandler.js';
import htmlparser from './parser.js';
import { createPosts } from './post.js';

export default function render(state) {
  if (errorHandler(state)) {
    const [post, feeds] = htmlparser(state);
    state.post = post;
    // console.log(htmlparser(state));
    state.feed = feeds;
    // console.log(state.feed)
    const {
      activefeed, titile, poststatus, feedstatus,
    } = createPosts(state);
    state.poststatus = poststatus;
    state.feedstatus = feedstatus;
    // console.log(createPosts(activefeed));
    // console.log(activefeed)
    state.inActivePost.post.push(...titile);
    state.inActivePost.feed.push(...activefeed);
    // console.log(state)
    return state;
  }
  return state;
}
