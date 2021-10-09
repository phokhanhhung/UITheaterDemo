import React from 'react';
import './Home.css';
import HomeNav from './HomeNav';
import Movies from './Movies';

function Home() {
  return (
    <div className="home">
       <HomeNav />
       <Movies />
    </div>
  )
}

export default Home
