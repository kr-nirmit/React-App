import axios from 'axios'
import React, { Component } from 'react'

class PostForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userid:'',
             title:'',
             body:''
        }
    }
    changeHandler = e =>{
        this.setState({[e.target.name]: e.target.value})
    }
    submitHandler = e =>{
        e.preventDefault()
        console.log(this.state);
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
            .then(response => {console.log(response);})
            .catch(error => {console.log(error);})
    }
    
    render() {
        const{ userid, title, body } = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <label>User ID : </label>
                        <input type='text' name='userid' value={userid} onChange={this.changeHandler}></input>
                    </div>
                    <div>
                    <label>Title : </label>
                        <input type='text' name='title' value={title} onChange={this.changeHandler}></input>
                    </div>
                    <div>
                    <label>Body : </label>
                        <input type='text' name='body' value={body} onChange={this.changeHandler}></input>
                    </div>
                    <div>
                        <button type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default PostForm
