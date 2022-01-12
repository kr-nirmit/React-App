import axios from 'axios'
import React, { Component } from 'react'

class PostList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts:[],
             errorMsg: ''
        }
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response); 
            this.setState({posts: response.data})
        })
        .catch(error => {
            console.log(error);
            this.setState({errorMsg: 'Data Not Found'})
        })
    }
    
    
    render() {
        const { posts, errorMsg } = this.state
        return (
            <div>
                {/* List of Posts  */}
                {/* {posts.map((post) => <div key={post.id}>{post.id}. {post.title}</div>)} */}
                {/* {
                    posts.length ?
                    posts.map((post) => {<div key={post.id}>{post.title}</div>}) :
                    null
                } */}
                { errorMsg ? <div>{errorMsg}</div> : null }

                <h1>List of Posts <br />GET API Call</h1>
                <table border='1'>
                    <tr>
                        <td>ID</td>
                        <td>Title Name</td>
                        <td>Body</td>
                    </tr>
                        {
                            posts.map((item) => 
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.body}</td>
                            </tr>
                            )
                        }
                </table>
            </div>

        )
    }
}

export default PostList
