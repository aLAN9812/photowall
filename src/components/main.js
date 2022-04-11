import React, { Component } from 'react'
import Photowall from './Photowall'
import AddPhoto from './AddPhoto'
import { Route } from 'react-router-dom'
import {Link} from 'react-router-dom'
import Single from './Single'

class Main extends Component {
    render() {
        return (
            <div>
                <h1><Link to='/'>Photowall</Link></h1>
                <Route exact path='/' render={() => (
                    <div>
                        <Photowall {...this.props} />
                    </div>
                )} />
                <Route path='/AddPhoto' render={() => (
                    <AddPhoto {...this.props}/>
                )} />
                <Route path='/Single/:id' render = {(params) => (
                    <Single {...this.props} {...params}/>
                )} />
            </div>
        )
    }
}

export default Main