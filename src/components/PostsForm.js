import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createPosts} from '../actions/postActions'


class PostForm extends Component {
    constructor(props){
        super(props)
        this.state = {
           title: '',
           body: ''
        }
    }

    handleChange = (e) => { 
        this.setState({ 
            [e.target.name]: e.target.value   
        })
    } 

    onSubmit = (e) => {
        e.preventDefault();
        const post = {
            title: this.state.title,
            body: this.state.body
        }
        this.props.createPosts(post)
    }
    

    render(){
        return(
            <div>
               <h1>Add Post</h1>
               <form onSubmit={this.onSubmit}>
                <label>Title: </label>
                <input type='text' value={this.state.title} onChange={this.handleChange} name='title'></input><br/><br />
                <label>Body: </label>
                <textarea value={this.state.body} onChange={this.handleChange} name='body'></textarea>
                <button type='submit'>Submit</button>
               </form>
            </div>
        )
    }
}

export default connect(null, { createPosts })(PostForm);