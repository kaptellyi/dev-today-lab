import { PostsState, Actions, ActionTypes, LoadingActionTypes } from './types';

const initialState: PostsState = {
  posts: [],
  loading: null,
  error: null,
};

const todoReducer = (state = initialState, action: Actions): PostsState => {
  switch (action.type) {
    case ActionTypes.SET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: null,
      };
    case ActionTypes.ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
        loading: null,
      };
    case ActionTypes.UPDATE_POST:
      console.log(state.posts, action);
      return {
        ...state,
        posts: state.posts.map((p) =>
          p.id === action.payload.id ? action.payload : p
        ),
        loading: null,
      };
    case LoadingActionTypes.POSTS_LOADING:
      return {
        ...state,
        loading: action,
      };
    case LoadingActionTypes.POST_LOADING:
      return {
        ...state,
        loading: action,
      };
    case ActionTypes.SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default todoReducer;
