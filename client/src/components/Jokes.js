import React from 'react';
import axios from 'axios';

import authenticate from './authenticate';

class Jokes extends React.Component {
    state = {
        jokes: []
    }

    componentDidMount() {
        axios.get("/jokes")
            .then(res => {
                console.log(res);
                this.setState({
                    jokes: res.data
                })
            })
            .catch(err => console.log(err))
    }
    render() {
        return (
            <>
                {this.state.jokes.map(joke => {
                    return <div key={joke.id}><p>{joke.joke}</p></div>
                })}
            </>
        )
    }
}

export default authenticate(Jokes);