import React, {useState} from 'react'

function SignUpForm(props) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`http://localhost:3000/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                username,
                password,
                email
            })
        })
        .then(resp => resp.json())
        .then(data => {
            localStorage.setItem("token", data.jwt)
            props.handleLogin(data.user)
        })
        setUsername("")
        setPassword("")
        setEmail("")
    }
    const formDivStyle = {
        margin: "auto",
        padding: "20px",
        width: "80%"
    }
    
    return(
        <div style={formDivStyle}>
            <h1>Sign Up</h1>
            <form className="ui form" onSubmit={handleSubmit}>
                <div className="field">
                    <label>Username</label>
                    <input value={username} onChange={handleUsernameChange} type="text" placeholder="username"/>
                </div>

                <div className="field">
                    <label>Password</label>
                    <input value={password} onChange={handlePasswordChange} type="password" placeholder="password"/>
                </div>

                <div className="field">
                    <label>Email</label>
                    <input value={email} onChange={handleEmailChange} type="email" placeholder="Email"/>
                </div>

                

                
                
                <button className="ui button" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default SignUpForm