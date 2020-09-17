import React from 'react'
import CheckTask from './CheckTask'

export default ({task}) => {
    return (
        <p>
            <CheckTask task={task} />
            {task.body}
        </p>   
    )
}
