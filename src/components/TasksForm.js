import React, { Component } from 'react';

class TasksForm extends Component {
    constructor() {
        super();
        this.state = {
          title: '',
          responsible: '',
          description: '',
          priority: 'low'
        };
        this.submitHandler = this.submitHandler.bind(this);   
        this.handler = this.handler.bind(this);   
      }

    submitHandler(e){
        e.preventDefault();
        this.props.onAddToDo(this.state);
        console.log('Sending info...');
        console.log(this.state);
    }

    handler(e){
        // console.log(e.target.value, e.target.name);
        const { value, name } = e.target;
        this.setState({
            [name]: value
        });
        console.log(this.state);
    }

    render() {
        return (
            <div className="card">
                <form className="card-body" onSubmit={this.submitHandler}>
                    <div className="form-group">
                        <label name="title">Title</label>
                        <input 
                        type="text" 
                        name="title"
                        onChange={this.handler}
                        value={this.state.title}
                        className="form-control"
                        placeholder="Title"
                        >
                        </input>
                    </div>
                    <div className="form-group">
                        <label name="responsible">Responsible</label>
                        <input 
                        type="text" 
                        name="responsible"
                        onChange={this.handler}
                        value={this.state.responsible}
                        className="form-control"
                        placeholder="Responsible"
                        >
                        </input>
                    </div>
                    <div className="form-group">
                        <label name="description">Description</label>
                        <input 
                        type="text" 
                        name="description"
                        onChange={this.handler}
                        value={this.state.description}
                        className="form-control"
                        placeholder="Description"
                        >
                        </input>
                    </div>
                    <div className="form-group">
                        <label name="priority">Priority</label>
                        <select
                            name="priority"
                            className="form-control"
                            onChange={this.handler}
                            value={this.state.priority}
                        >
                        <option>low</option>
                        <option>medium</option>
                        <option>high</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Save
                    </button>
                </form>
            </div>
        );
    }
}

export default TasksForm;