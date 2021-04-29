export interface PostFormI {
  title: string;
  body: string;
}

export interface CommentFormI {
  body: string;
  postId: number;
}

export interface PostI extends PostFormI {
  id: number;
  comments: CommentI[];
}

export interface CommentI {
  body: string;
  postId: number;
  id: number;
}

type LoadingState = LoadingPostsAction | LoadingPostAction | null;

export interface PostsState {
  posts: PostI[];
  loading: LoadingState;
  error: string | null;
}

export enum ActionTypes {
  SET_POSTS = 'SET_POSTS',
  ADD_POST = 'ADD_POST',
  UPDATE_POST = 'UPDATE_POST',
  SET_ERROR = 'SET_ERROR',
}

export enum LoadingActionTypes {
  POSTS_LOADING = 'POSTS_LOADING',
  POST_LOADING = 'POST_LOADING',
}

interface SetPostsAction {
  type: ActionTypes.SET_POSTS;
  payload: PostI[];
}

interface AddPostsAction {
  type: ActionTypes.ADD_POST;
  payload: PostI;
}

interface UpdatePostsAction {
  type: ActionTypes.UPDATE_POST;
  payload: PostI;
}

interface LoadingPostsAction {
  type: LoadingActionTypes.POSTS_LOADING;
}

interface LoadingPostAction {
  type: LoadingActionTypes.POST_LOADING;
  // id of the post
  payload: number;
}

interface SetErrorAction {
  type: ActionTypes.SET_ERROR;
  payload: string;
}

export type Actions =
  | LoadingPostsAction
  | LoadingPostAction
  | SetPostsAction
  | AddPostsAction
  | UpdatePostsAction
  | SetErrorAction;
