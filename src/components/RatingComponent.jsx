import React from "react";

function RatingComponent({
    defaultRating = 0,
    editable = false,
    ratingStarsCount = 5
  }) {
    const [rating, setRating] = React.useState(defaultRating);
    const [hover, setHover] = React.useState(0);
    let calculatedRating = `${
      ((hover ? hover : rating) / ratingStarsCount) * 100
    }%`;
  
    return (
      <div className="rating" style={{ "--rating": calculatedRating }}>
        {[...new Array(ratingStarsCount)].map((star, index) => {
          return (
            <span
              key={index}
              onClick={editable ? () => setRating(++index) : null}
              onMouseEnter={editable ? () => setHover(++index) : null}
              onMouseLeave={editable ? () => setHover(rating) : null}
            >
              ★
            </span>
          );
        })}
      </div>
    );
  }

export default RatingComponent;