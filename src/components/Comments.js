import React, { Component } from 'react'

class Comments extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()
        const comment = event.target.elements.comment.value
        this.props.addComment(comment, this.props.id)
    }

    render() {
        console.log(this.props.comments)
        return (
            <div className='comments'>
                {
                    this.props.comments.map((comment, index) => {
                        return (
                            <p key={index}>{comment}</p>
                        )
                    })
                }
                <form className='comment-form' onSubmit={this.handleSubmit}>
                    <input type='text' placeholder='Comment' name='comment'></input>
                    <input type='submit' hidden></input>
                </form>
            </div>
        )
    }
}

export default Comments