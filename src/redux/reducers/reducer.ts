import * as types from "../constants";

const initialState: ArticleState = {
  articles: [
    {
      id: 1,
      title: "post 1",
      body:
        "Quisque cursus, metus vitae pharetra Nam libero tempore, cum soluta nobis est eligendi",
    },
    {
      id: 2,
      title: "post 2",
      body:
        "Harum quidem rerum facilis est et expedita distinctio quas molestias excepturi sint",
    },
  ],
  inputValue1: "",
  inputValue2: "",
};
const reducer = (
  state: ArticleState = initialState,
  action: Actions
): ArticleState => {
  switch (action.type) {
    case types.ADD_ARTICLE:
      return {
        articles: [
          ...state.articles,
          {
            id: state.articles.length + 1,
            title: action.title,
            body: action.body,
          },
        ],
      };

    case types.REMOVE_ARTICLE:
      return {
        ...state,
        articles: state.articles.filter(
          (article: IArticle) => article.id !== action.id
        ),
      };

    case types.SET_INPUT_VALUE1:
      return { ...state, inputValue1: action.value };

    case types.SET_INPUT_VALUE2:
      return { ...state, inputValue2: action.value };
  }
  return state;
};

export default reducer;
