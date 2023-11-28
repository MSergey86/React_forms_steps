import React from 'react'


function Item(props) {
    const { id, date, distance, workouts, setWorkouts } = props;
  
    const handleDel = (evt) => {
      const id = evt.target.closest('.item').id;
  
      let arr = workouts.slice(0, workouts.length);
      
  
      const index = arr.findIndex((e) => e.id === id);
  
      arr.splice(index, 1);
      setWorkouts(arr);
    }
  
    return (
      <li className="item" key={id}>
        <span>{date}</span>
        <span>{distance}</span>
        <button className="btn_del" onClick={handleDel}>X</button>
      </li>
    );
  }

  export default Item