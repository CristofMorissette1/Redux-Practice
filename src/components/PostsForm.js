import React, { Component } from 'react'


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

    render(){
        return(
            <div>
               <h1>Add Post</h1>
               <form>
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

export default PostForm;