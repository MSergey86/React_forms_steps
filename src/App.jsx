
import './App.css'
import { useState } from 'react'
import Forms from './components/Forms.tsx'

function App() {

  const [workouts, setWorkouts] = useState([
    {
      id: 1,
      date: '17.12.23',
      distance: 1.5 ,
    },
    {
      id: 2,
      date: '19.12.23',
      distance:  2.3 ,
    },
  ])

  return (
    <>
      <Forms workouts={workouts} setWorkouts={setWorkouts}/>
    </>
  )
}

export default App
