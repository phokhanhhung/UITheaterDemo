import React from 'react';
import "./RecommendPoster.css";

function RecommendPoster({poster, title, rating, type, date}) {
  return (
    <div className="recommendPoster">
      <img className="recommendPoster_img" src={poster} alt="poster" />
      <div className="recommendPoster_dateRating">
        <h4 className="recommendPoster_date">
          {title}
        </h4>
        <div className="recommendPoster_rating">
          <i class="fas fa-star"></i>
          {rating}
        </div>
      </div>
      <div className="recommendPoster_typeDate">
        <span className="recommendPoster_type">{type}</span>|
        <span className="recommendPoster_date">{date}</span>
      </div>
    </div>
  )
}

export default RecommendPoster
