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

    randomInt = (max) => {
        return Math.floor(Math.random() * Math.floor(max))
    }

    randomJoke = e => {
        e.preventDefault();
        return this.randomInt(this.state.jokes.length+1);

    }
    render() {
        return (
            <>
                       <h1>Dad Jokes</h1>
                {this.state.jokes.map(joke => {
                    return <div key={joke.id}><p>{joke.joke}</p></div>
                })}
                {/* {this.state.jokes.filter((joke, index) => joke[index] === joke[4])}
                <button onClick={e => this.randomJoke(e)}>Get Dad Joke!</button> */}
            </>
        )
    }
}

export default authenticate(Jokes);