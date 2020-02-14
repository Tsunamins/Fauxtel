import React, {useState} from 'react'

function SignUpForm(props) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
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
                password
            })
        })
        .then(resp => resp.json())
        .then(data => {
            localStorage.setItem("token", data.jwt)
            props.handleLogin(data.user)
        })
        setUsername("")
        setPassword("")
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
                    <input value={email} onChange={handlePasswordChange} type="email" placeholder="Email"/>
                </div>

                <div className="field">
                    <label>First Name</label>
                    <input value={first_name} onChange={handlePasswordChange} type="text" placeholder="First Name"/>
                </div>

                <div className="field">
                    <label>Last Name</label>
                    <input value={last_name} onChange={handlePasswordChange} type="text" placeholder="Last Name"/>
                </div>

                <div className="field">
                    <label>Birthday</label>
                    <input value={birthday} onChange={handlePasswordChange} type="date"/>
                </div>

                <div className="field">
                    <label>Phone Number</label>
                    <input value={phone_number} onChange={handlePasswordChange} type="text" placeholder="Format 1-123-123-1234"/>
                </div>

                <div className="field">
                    <label>Address</label>
                    <input value={address} onChange={handlePasswordChange} type="text" placeholder="Address"/>
                </div>

                <div className="field">
                    <label>Apt or Suite Number</label>
                    <input value={apt_suite_number} onChange={handlePasswordChange} type="number" placeholder="Apt or Suite Number"/>
                </div>

                <div className="field">
                    <label>City</label>
                    <input value={city} onChange={handlePasswordChange} type="string" placeholder="City"/>
                </div>

                <div className="field">
                    <label>State</label>
                    <input value={state} onChange={handlePasswordChange} type="string" placeholder="State"/>
                </div>

                <div className="field">
                    <label>Zip Code</label>
                    <input value={zip_code} onChange={handlePasswordChange} type="number" placeholder="Zip Code"/>
                </div>

                <div className="field">
                    <label>Favorite Food</label>
                    <input value={favorite_food} onChange={handlePasswordChange} type="string" placeholder="i.e. Steak"/>
                </div>

                <div className="field">
                    <label>Favorite Drink</label>
                    <input value={favorite_drink} onChange={handlePasswordChange} type="string" placeholder="i.e. Moscow Mule"/>
                </div>

                <div className="field">
                    <label>Favorite Activity</label>
                    <input value={favorite_activity} onChange={handlePasswordChange} type="string" placeholder="i.e. Wind Surfing"/>
                </div>

                
                
                <button className="ui button" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default SignUpForm