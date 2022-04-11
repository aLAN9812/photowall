import React, { Component } from 'react'

class Comments extends Component {
    render() {
        return (
            <div className='comments'>
                <form className='comment-form'>
                    <input type='text' placeholder='Comment'></input>
                    <input type='submit'></input>
                </form>
            </div>
        )
    }
}

export default Comments