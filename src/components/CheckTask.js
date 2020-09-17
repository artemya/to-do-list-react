import React from 'react'

export default ({task}) => {
    console.log(task.id)
    return (
        <input className="input-checkbox" type="checkbox" defaultChecked={task.isComplete} />
    )
}
