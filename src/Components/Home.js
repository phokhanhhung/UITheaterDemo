import React from 'react';
import './Home.css';
import HomeNav from './HomeNav';
import Movies from './Movies';
import Recommend from './Recommend';

function Home() {
  return (
    <div className="home">
       <HomeNav />
       <Movies />
       <Recommend />
    </div>
  )
}

export default Home
