import React, {Component} from 'react'
import List from './list'
import Title from './title'

class Main extends Component {
    render() {
        return <div>
                    <Title title = {'Ordered List'}/>
                    <List listItems = {['Item 1', 'Item 2', 'Item 3']}/>
                    <List listItems = {['Item A', 'Item B', 'Item C']}/>
                </div>
    }
}

export default Main