import { PostsState, Actions, ActionTypes } from './types';

const initialState: PostsState = {
  comments: [],
  loading: false,
  error: null,
};

const commentsReducer = (state = initialState, action: Actions): PostsState => {
  switch (action.type) {
    case ActionTypes.SET_COMMENTS:
      return {
        ...state,
        comments: action.payload,
        loading: null,
      };
    case ActionTypes.ADD_COMMENT:
      return {
        ...state,
        comments: [...state.comments, action.payload],
        loading: null,
      };
    case ActionTypes.COMMENTS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.SET_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default commentsReducer;
