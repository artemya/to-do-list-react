import React from 'react'
import Task from './Task'

export default ({tasks}) => {
   
    return (
        <div className="tasks" id="task">
            { tasks.map(t => (
                <Task key={t.id} task={ t }/>
            ))}
        </div>
    )
}
