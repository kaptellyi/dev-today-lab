import { Dispatch } from 'react';
import instance from '../../api/axios';
import { definePaginateIndex } from '../../helpers';
import { RootState } from '../../store';
import {
  ActionTypes,
  Actions,
  PostI,
  PostFormI,
  LoadingActionTypes,
} from './types';

export const postsLoading = (): Actions => {
  return {
    type: LoadingActionTypes.POSTS_LOADING,
  };
};

export const postLoading = (id: number): Actions => {
  return {
    type: LoadingActionTypes.POST_LOADING,
    payload: id,
  };
};

export const setPosts = (posts: PostI[]): Actions => {
  return {
    type: ActionTypes.SET_POSTS,
    payload: posts,
  };
};

export const addPost = (post: PostI): Actions => {
  return {
    type: ActionTypes.ADD_POST,
    payload: post,
  };
};

export const updatePost = (post: PostI): Actions => {
  return {
    type: ActionTypes.UPDATE_POST,
    payload: post,
  };
};

export const setError = (errMsg: string): Actions => {
  return {
    type: ActionTypes.SET_ERROR,
    payload: errMsg,
  };
};

export const paginateAction = (serverPosts: PostI[]) => (
  dispatch: Dispatch<Actions>,
  getState: () => RootState
) => {
  const { posts } = getState().posts;
  const paginatedPosts = serverPosts.slice(
    0,
    posts.length + definePaginateIndex()
  );
  dispatch(setPosts(paginatedPosts));
};

export const createPost = (post: PostFormI) => async (
  dispatch: Dispatch<Actions>
) => {
  try {
    const response = await instance.post('/posts', post);
    const data = (await response.data) as PostI;
    dispatch(addPost(data));
  } catch (err) {
    dispatch(setError(err.message));
  }
};
