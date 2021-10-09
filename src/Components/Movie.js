import React from 'react';
import './Movie.css';
import bogia from '../Images/Bố già.jpg';

function Movie({children, duration, type, start, actors, rating}) {
  return (
    <div className="movie">
      <img src={bogia} alt="poster"/>
      <div className="movie_more">
        <div className="movie_infor">
          <h1>{children}</h1>

          <div className="movie_tag">
            <i className="far fa-clock"></i>
            <h3>Thời lượng: <span>{duration}</span></h3>
          </div>

          <div className="movie_tag">
            <i className="fas fa-tag"></i>
            <h3>Thể loại: <span>{type}</span></h3>
          </div>

          <div className="movie_tag">
            <i className="far fa-calendar-check"></i>
            <h3>Khởi chiếu: <span>{start}</span></h3>
          </div>

          <div className="movie_tag">
            <i className="fas fa-user-friends"></i>
            <h3>Diễn viên: <span>{actors}</span></h3>
          </div>
          
          <div className="movie_tag">
            <i className="fas fa-thumbs-up"></i>
            <h3>
              Đánh giá: {" "}
              {Array(rating)
              .fill()
              .map((_,i) => <i key={i} className="far fa-star"></i>)}
            </h3>
          </div>
          
        </div>
        
        <div className="movie_btn">
          <button className="movie_detail">CHI TIẾT</button>
          <button className="movie_buy">MUA VÉ</button>
        </div>
      </div>
      
    </div>
  )
}

export default Movie
