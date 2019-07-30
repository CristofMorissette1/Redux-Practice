import React, { Component } from 'react'


class Posts extends Component {


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