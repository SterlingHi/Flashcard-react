import React from "react";
import "./title.css";

const Title = (props) => {
  return (
    <div className="title">
      <div className="col-md-12" style={{ padding: 0 }}>
        <div className="title-nav">
          <h1>Flashcards</h1>
        </div>
      </div>
    </div>
  );
};

export default Title;
