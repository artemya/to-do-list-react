import React, { Component } from 'react'

class TaskForm extends Component {
    onSubmitHandler = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state)

    }
    onChange = (event) => {
        this.setState({
            body: event.target.value
        })
    }
    render() {
        return (
            <form onSubmit={this.onSubmitHandler}> 
                <input type="text"
                    name="body"
                    placeholder="Task"
                    className="form-control w-75 p-3" 
                    onChange={this.onChange}/>
                <button type="submit" 
                    className="btn btn-secondary w-25">
                    Add
                </button>
            </form>
        )
    }
}

export default TaskForm