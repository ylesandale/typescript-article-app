import * as React from "react";

interface ArticalProps {
  article: IArticle;
  onRemove(id: number): void;
}

export const Article: React.FunctionComponent<ArticalProps> = ({
  article,
  onRemove,
}) => {
  const onRemoveArticle = (e: any) => {
    e.preventDefault();
    onRemove(article.id);
  };

  return (
    <div className="Article">
      <div>
        <h1>{article.title}</h1>
        <p>{article.body}</p>
      </div>
      <button onClick={onRemoveArticle}>Delete</button>
    </div>
  );
};
