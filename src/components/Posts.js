import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts} from '../actions/postActions'
import PropTypes from 'prop-types'


class Posts extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    render(){
        const fetchPosts = this.props.posts.map(post => 
        <div key={post.id}>
            <h3>{post.title}</h3>
            <h3>{post.body}</h3>
        </div>)
        return(
            <div>
                {fetchPosts}
            </div>
        )
    }
}

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
    posts: state.posts.items
})

export default connect(mapStateToProps, { fetchPosts })(Posts);