import axios from 'axios'
import React,{useState, useEffect} from 'react'

function DataFetching() {
    const [posts, setposts] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            console.log(res);
            setposts(res.data)
        })
        .catch(err => {
            console.log(err);
        })
        
        return () => {
            
        }
    }, [])

    return (
        <div>
            <h1>List of Posts <br />GET API Call</h1>
                <table border='1'>
                    <tr>
                        <td>ID</td>
                        <td>Title Name</td>
                        <td>Body</td>
                    </tr>
                    {
                        posts.map((item) => 
                        <tr key={item.id}>
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

export default DataFetching
