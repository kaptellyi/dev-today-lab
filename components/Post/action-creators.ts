import { Dispatch } from 'react';
import instance from '../../api/axios';
import { ActionTypes, Actions, CommentI, CommentFormI } from './types';

export const commentsLoading = (): Actions => {
  return {
    type: ActionTypes.COMMENTS_LOADING,
  };
};

export const setComments = (comments: CommentI[]): Actions => {
  return {
    type: ActionTypes.SET_COMMENTS,
    payload: comments,
  };
};

export const addComment = (comment: CommentI): Actions => {
  return {
    type: ActionTypes.ADD_COMMENT,
    payload: comment,
  };
};

export const setError = (errMsg: string): Actions => {
  return {
    type: ActionTypes.SET_ERROR,
    payload: errMsg,
  };
};

export const createComment = (comment: CommentFormI) => async (
  dispatch: Dispatch<Actions>
) => {
  dispatch(commentsLoading());

  try {
    const response = await instance.post('/comments', comment);
    const data = (await response.data) as CommentI;
    dispatch(addComment(data));
  } catch (err) {
    setError(err.message);
  }
};
