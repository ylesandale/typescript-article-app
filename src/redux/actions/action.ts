import * as types from "../constants";

export const addArticle = (title: string, body: string): AddArticle => ({
  type: types.ADD_ARTICLE,
  title,
  body,
});

export const removeArticle = (id: number): RemoveArticle => ({
  type: types.REMOVE_ARTICLE,
  id,
});

export const setInputValue1 = (value: string): inputValue => ({
  type: types.SET_INPUT_VALUE1,
  value,
});

export const setInputValue2 = (value: string): inputValue => ({
  type: types.SET_INPUT_VALUE2,
  value,
});
