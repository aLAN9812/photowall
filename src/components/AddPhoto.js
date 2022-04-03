import React, {Component} from 'react'
import PropTypes from 'prop-types'

class AddPhoto extends Component {
    render() {
        return (
            <div>
                <h1>Add Post</h1>
                <div className='form'>
                    <form>
                        <input type='text' placeholder='Link'/>
                        <input type='text' placeholder='Description'/>
                        <button>Post</button>
                    </form>
                </div>
                
            </div>
        )
    }
}

export default AddPhoto