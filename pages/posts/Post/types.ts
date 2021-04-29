export interface CommentFormI {
  body: string;
  postId: number;
}

export interface CommentI {
  body: string;
  postId: number;
  id: number;
}

export interface PostsState {
  comments: CommentI[];
  loading: boolean;
  error: string | null;
}

export enum ActionTypes {
  COMMENTS_LOADING = 'COMMENTS_LOADING',
  SET_COMMENTS = 'SET_COMMENTS',
  ADD_COMMENT = 'ADD_COMMENT',
  UPDATE_COMMENT = 'UPDATE_COMMENT',
  SET_ERROR = 'SET_ERROR',
}

interface SetCommentsAction {
  type: ActionTypes.SET_COMMENTS;
  payload: CommentI[];
}

interface AddCommentAction {
  type: ActionTypes.ADD_COMMENT;
  payload: CommentI;
}

interface CommentsLoadingAction {
  type: ActionTypes.COMMENTS_LOADING;
}

interface SetErrorAction {
  type: ActionTypes.SET_ERROR;
  payload: string;
}

export type Actions =
  | CommentsLoadingAction
  | SetCommentsAction
  | AddCommentAction
  | SetErrorAction;
