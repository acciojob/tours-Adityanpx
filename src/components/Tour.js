import React, { useState } from "react";
import App from "../styles/App.css";

const Tour = ({ id, name, image, info, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}.....`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "See Less" : "Show More"}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeTour(id)}>
          Remove
        </button>
      </footer>
    </article>
  );
};

export default Tour;
