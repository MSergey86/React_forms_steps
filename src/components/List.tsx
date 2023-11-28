import React from 'react'

import '../App.css'
import Item from './Item.tsx';


function List (props) {
    const { workouts, setWorkouts } = props;

    return (
        <ul className="list">
            <div>
                <div className="list-header">
                    <span>Дата</span>
                    <span>Пройдено, км</span>
                    <span>Действия</span>
                </div>
            </div>
            
            <div className="list-wrap">
                {workouts
                .sort((a, b) => b.date > a.date ? 1 : -1)
                .map((e) => (
                    <Item key={e.id}
                        id={e.id}
                        date={e.date}
                        distance={e.distance}
                        workouts={workouts}
                        setWorkouts={setWorkouts}
                    />
                    )
                )}
            </div>
        </ul>
    )

}

export default List