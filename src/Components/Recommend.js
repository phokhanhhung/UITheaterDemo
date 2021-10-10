import React from 'react';
import './Recommend.css';
import RecommendPoster from './RecommendPoster';
import bogia from '../Images/Bố già.jpg';

function Recommend() {
  return (
    <div className="recommend">
      <h2 className="recommend_title">PHIM HAY ĐỀ XUẤT</h2>
      <ul className="recommend_list">
        <i className="fas fa-angle-left"></i>
        <li><RecommendPoster poster={bogia} title="BỐ GIÀ" rating={4.7} type="Phim hài" date="27/02/2021"/></li>
        <li><RecommendPoster poster={bogia} title="BỐ GIÀ" rating={4.7} type="Phim hài" date="27/02/2021"/></li>
        <li><RecommendPoster poster={bogia} title="BỐ GIÀ" rating={4.7} type="Phim hài" date="27/02/2021"/></li>
        <li><RecommendPoster poster={bogia} title="BỐ GIÀ" rating={4.7} type="Phim hài" date="27/02/2021"/></li>
        <li><RecommendPoster poster={bogia} title="BỐ GIÀ" rating={4.7} type="Phim hài" date="27/02/2021"/></li>
        <li><RecommendPoster poster={bogia} title="BỐ GIÀ" rating={4.7} type="Phim hài" date="27/02/2021"/></li>
        <i className="fas fa-angle-right"></i>      
      </ul>
    </div>
  )
}

export default Recommend
