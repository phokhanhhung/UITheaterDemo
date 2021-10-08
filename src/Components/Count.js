import React, {useState} from 'react';
import './Count.css';

function Count({name, onClick, children}) {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  }
  return (
    <div>
      <h1 className="h1" id="h11" onClick={onClick}>Count: {count}</h1>
      <h2>{name}, {children}</h2>
    </div>
  )
}

export default Count
