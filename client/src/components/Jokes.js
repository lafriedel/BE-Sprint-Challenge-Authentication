import React from 'react';

import authenticate from './authenticate';

class Jokes extends React.Component {
    render() {
        return <p>Jokes</p>
    }
}

export default authenticate(Jokes);