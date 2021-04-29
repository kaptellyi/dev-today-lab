import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { createWrapper } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';
import postsReducer from '../components/Posts/reducer';
import commentsReducer from '../components/Post/reducer';

const middleware = [thunk];

export const rootReducer = combineReducers({
  posts: postsReducer,
  comments: commentsReducer,
});

const makeStore = () =>
  createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));

export type RootState = ReturnType<typeof rootReducer>;
const { withRedux } = createWrapper(makeStore);
export default withRedux;
