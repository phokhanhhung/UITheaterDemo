import React from 'react';
import Movie from './Movie';
import PageNumber from './PageNumber';
import './Movies.css';
import '../grid.css';

function Movies() {
  return (
    <div className="movies">
      <div className="movies_row-3">
        <Movie 
          duration="120 phút" 
          type="Phim hài" 
          start="27/02/2021" 
          actors="Trấn Thành, Tuấn Trần, NSND Ngọc Giàu, ..." 
          rating={5}
        >
          BỐ GIÀ
        </Movie>

        <Movie 
          duration="120 phút" 
          type="Phim hài" 
          start="27/02/2021" 
          actors="Trấn Thành, Tuấn Trần, NSND Ngọc Giàu, ..." 
          rating={5}
        >
          BỐ GIÀ
        </Movie>

        <Movie 
          duration="120 phút" 
          type="Phim hài" 
          start="27/02/2021" 
          actors="Trấn Thành, Tuấn Trần, NSND Ngọc Giàu, ..." 
          rating={5}
        >
          BỐ GIÀ
        </Movie>
      </div>

      <div className="movies_row-3">
        <Movie 
          duration="120 phút" 
          type="Phim hài" 
          start="27/02/2021" 
          actors="Trấn Thành, Tuấn Trần, NSND Ngọc Giàu, ..." 
          rating={5}
        >
          BỐ GIÀ
        </Movie>

        <Movie 
          duration="120 phút" 
          type="Phim hài" 
          start="27/02/2021" 
          actors="Trấn Thành, Tuấn Trần, NSND Ngọc Giàu, ..." 
          rating={5}
        >
          BỐ GIÀ
        </Movie>

        <Movie 
          duration="120 phút" 
          type="Phim hài" 
          start="27/02/2021" 
          actors="Trấn Thành, Tuấn Trần, NSND Ngọc Giàu, ..." 
          rating={5}
        >
          BỐ GIÀ
        </Movie>
      </div>
      <PageNumber/>
    </div>
  )
}

export default Movies
