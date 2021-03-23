interface IArticle {
  id: number;
  title: string;
  body: string;
}

type ArticleState = {
  articles: IArticle[];
  inputValue1?: string;
  inputValue2?: string;
};

type AddArticle = { type: "ADD_ARTICLE"; title: string; body: string };
type RemoveArticle = { type: "REMOVE_ARTICLE"; id: number };
type inputValue = {
  type: "SET_INPUT_VALUE1" | "SET_INPUT_VALUE2";
  value: string;
};

type Actions = AddArticle | removeArticle | inputValue;

type ArticlesSelector = {
  reducer: {
    articles: IArticle[];
    inputValue1: "string";
    inputValue2: "string";
  };
};
