import React from "react";
import theForm from "../Form/theForm";
import "./reformFlashCard.css";

const ReformFlashcard = (props) => {
  const { values, handleChange, handleSubmit } = theForm(update);
  function update() {
    props.putFlashcard(values);
  }

  if (props.displayForm === true) {
    return (
      <React.Fragment>
        <div className="update">
          <h1>reform the flashcard</h1>
          <form onSubmit={handleSubmit}>
            <label>
              Question:
              <input
                type="text"
                name="question"
                onChange={handleChange}
                placeholder={props.currentCard.question}
                values={values.question}
                required={false}
              />
            </label>
            <label>
              Answer:
              <input
                type="text"
                name="answer"
                onChange={handleChange}
                placeholder={props.currentCard.answer}
                values={values.answer}
                required={false}
              />
            </label>
            <label>
              Collection
              <select
                name="collectionId"
                onChange={handleChange}
                values={values.collectionId}
                required={false}
              >
                {props.collections.map((collection, id) => {
                  <option key={id}>{id}</option>;
                  return (
                    <option value={collection.id}>{collection.name}</option>
                  );
                })}
              </select>
            </label>
            <input type="submit" className="btn btn-info" value="Add" />
          </form>
        </div>
      </React.Fragment>
    );
  } else {
    return null;
  }
};

export default ReformFlashcard;
