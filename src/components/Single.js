import React, { Component } from 'react'
import Photo from './Photo'
import Comments from './Comments'
import {Link} from 'react-router-dom'

class Single extends Component {
    render() {
        const { match, posts } = this.props
        const id = Number(match.params.id)
        const post = posts.find((post) => post.id === id)
        const comments = this.props.comments[id] || []
        const index = this.props.posts.findIndex((post) => post.id === id)
        return <div>
            <div className='single-photo'>
                <Photo post={post} {...this.props} index={index}/>
                <Comments startAddingComment={this.props.startAddingComment} comments={comments} id={id}/>
            </div>
            <div>
                <Link className='back' to='/'>Back</Link>
            </div>
        </div>
        
    }
}

export default Single