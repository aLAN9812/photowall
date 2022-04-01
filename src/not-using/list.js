import React, {Component} from 'react'

class List extends Component {
    render() {
        return (
            <ol>
                {this.props.listItems.map((item, index) => <li key = {index}>{item}</li>)}
            </ol>
        )
    }
}

export default List