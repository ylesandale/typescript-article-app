import * as React from "react";
type Props = {
  inputValue1: string;
  inputValue2: string;
  onInputValue1(value: string): void;
  onInputValue2(value: string): void;
  onAdd(title: string, body: string): void;
};

export const AddArticle: React.FC<Props> = ({
  inputValue1,
  inputValue2,
  onInputValue1,
  onInputValue2,
  onAdd,
}) => {
  const onAddArticle = (e: any) => {
    e.preventDefault();
    if (inputValue1 && inputValue2) {
      onAdd(inputValue1, inputValue2);
      onInputValue1("");
      onInputValue2("");
    } else {
      alert("Вы должны заполнить все поля");
    }
  };

  return (
    <form className="Add-article">
      <input
        onChange={(e: any) => onInputValue1(e.target.value)}
        value={inputValue1}
        type="text"
        id="title"
        placeholder="Title"
      />
      <input
        onChange={(e: any) => onInputValue2(e.target.value)}
        value={inputValue2}
        type="text"
        id="body"
        placeholder="Description"
      />
      <button onClick={onAddArticle}>Add article</button>
    </form>
  );
};
