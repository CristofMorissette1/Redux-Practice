import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts} from '../actions/postActions'
import PropTypes from 'prop-types'


class Posts extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    componentWillReceiveProps(nextProp) {
        if (nextProp.newPosts) {
            this.props.posts.unshift(nextProp.newPosts)
        }
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
    posts: PropTypes.array.isRequired,
    newPosts: PropTypes.object 
}

const mapStateToProps = (state) => ({
    posts: state.posts.items,
    newPosts: state.posts.item
})

export default connect(mapStateToProps, { fetchPosts })(Posts);