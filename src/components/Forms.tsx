import React from 'react'


import '../App.css'
import { useState } from "react";
import List from './List.tsx'

function Forms (props) {
  const {workouts, setWorkouts} = props;

    interface Form {
      id: number;
      date: string;
      distance: number;
    }
 
    const initial = {         
      id: 0,
      date: '',
      distance: 0,
    }

    const [form, setForm] = useState<Form> (initial)

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const addWorkout = {
        id: Date.now(),
        date: form.date,
        distance: +form.distance,
      };
  
      let arr = workouts.slice(0, workouts.length);
  
      let Updeted = false;
  
      arr.forEach(item => {
        if (item.date === form.date) {
          item.distance += +form.distance;
          Updeted = true;
        }
      });
  
      if (!Updeted) {
        arr.push(addWorkout);
      }
  
      setWorkouts(arr);
      setForm(initial);

    }

    const handleChange = ({target}: React.FormEvent<HTMLInputElement>) => {
        const {id, name, value} = target as HTMLInputElement;
        setForm(prevForm => ({
          ...prevForm,
          id: Date.now(),
          [name]: value,


        }))
        console.log(form);
    }

    return (
      <>
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="date">Дата 
            <input className="form_date" type="text" id="date" name="date"
              value={form.date} onChange={handleChange} required />
          </label>
          <label htmlFor="distance">Пройдено, км
            <input className="form_distance" type="text" id="distance" name="distance"
              value={form.distance} onChange={handleChange} required />
          </label>
          <button className="form_btn-ok" type="submit">ok</button>
          {/* <div className='44'>{form.name}  {form.date}  {form.distance} </div> */}
        </form>
        <List workouts={workouts} setWorkouts={setWorkouts}/>
      </>
    )
}


export default Forms