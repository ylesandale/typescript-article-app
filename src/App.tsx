import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Article } from "./components/Article";
import { AddArticle } from "./components/AddArticle";
import {
  addArticle,
  removeArticle,
  setInputValue1,
  setInputValue2,
} from "./redux/actions/action";

import "./index.scss";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const articles: readonly IArticle[] = useSelector(
    (state: ArticlesSelector) => state.reducer.articles
  );
  const inputValue1 = useSelector(
    (state: ArticlesSelector) => state.reducer.inputValue1
  );
  const inputValue2 = useSelector(
    (state: ArticlesSelector) => state.reducer.inputValue2
  );

  const onInputValue1 = (value: string) => {
    dispatch(setInputValue1(value));
  };

  const onInputValue2 = (value: string) => {
    dispatch(setInputValue2(value));
  };

  const onAdd = (title: string, body: string) => {
    dispatch(addArticle(title, body));
  };

  const onRemove = (id: number) => {
    dispatch(removeArticle(id));
  };

  return (
    <main>
      <h1>My Articles</h1>
      <AddArticle
        inputValue1={inputValue1}
        inputValue2={inputValue2}
        onInputValue1={onInputValue1}
        onInputValue2={onInputValue2}
        onAdd={onAdd}
      />
      {articles.map((article: IArticle) => (
        <Article key={article.id} article={article} onRemove={onRemove} />
      ))}
    </main>
  );
};

export default App;
