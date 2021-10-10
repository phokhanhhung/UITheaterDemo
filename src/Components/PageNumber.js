import React from 'react';
import "./PageNumber.css";

function PageNumber() {
  return (
    <div className="pagenumber">
      <ul className="pagenumber_list">
        <i className="fas fa-angle-left"></i>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <i className="fas fa-angle-right"></i>      
        <div className="pagenumber_pos"></div> 
      </ul>

    </div>
  )
}

export default PageNumber
