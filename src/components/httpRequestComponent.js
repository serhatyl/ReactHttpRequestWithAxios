import React from 'react';
import axios from 'axios';

export class HttpRequestComponent extends React.Component {

    constructor() {
        super()
        this.state = {
            username: ''
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        axios.get('https://api.github.com/users/serhatyl')
            .then(response => {
                console.log(response);
                this.setState({ username: response.data.name });
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        return (
            <div className='button__container'>
                <p>{this.state.username}</p>
                <button className='button' onClick={this.handleClick}>Click Me</button>
            </div>
        )
    }
}