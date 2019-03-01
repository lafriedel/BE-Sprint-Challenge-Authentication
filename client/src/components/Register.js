import React from 'react';

const Register = props => {
    return (
        <>
            <form onSubmit={e => props.register(e)}>
                <input type="text" name="username" value={props.user.username} onChange={props.handleInputChange} placeholder="Username" />
                <input type="password" name="password" value={props.user.password} onChange={props.handleInputChange} placeholder="password" />
                <button>Register</button>
            </form>
        </>
    )
}

export default Register;