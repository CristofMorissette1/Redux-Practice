import React, { Component } from 'react'


class Posts extends Component {
    constructor(props){
        super(props)
        this.state = {
            posts: []
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => this.setState({posts: data}))
    }


    render(){
        const fetchedPosts = this.state.posts.map(post => 
        <div key={post.id}>
            <h3>{post.title}</h3>
            <h3>{post.body}</h3>
        </div>)
        return(
            <div>
                {fetchedPosts}
            </div>
        )
    }
}

export default Posts;