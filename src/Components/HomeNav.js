import React from 'react';
import './HomeNav.css';

function HomeNav() {
  return (
    <div className="homenav">
      <ul className="homenav_item">
        <li>PHIM ĐANG CHIẾU</li>
        <li>PHIM SẮP CHIẾU</li>
        <li>SUẤT CHIẾU ĐẶC BIỆT</li>
      </ul>
      <div className="homenav_pos"></div>
    </div>
  )
}

export default HomeNav
