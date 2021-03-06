import React, {useState, useEffect} from 'react';
import Header from '../components/Header'
import SignUpForm from '../components/SignUpForm';
import LoginForm from '../components/LoginForm'

function UserAuths() {
  const [user, setUser] = useState({})
  const [form, setForm] = useState("")

  useEffect(() => {
    const token = localStorage.getItem("token")
    if(token){
      fetch(`http://localhost:3000/auto_login`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(resp => resp.json())
      .then(data => {
        setUser(data)
        // console.log(data)
      })
    }
  }, [])

  const handleLogin = (user) => {
    setUser(user)
  }

  const handleFormSwitch = (input) => {
    setForm(input)
  }

  const handleAuthClick = () => {
    const token = localStorage.getItem("token")
    fetch(`http://localhost:3000/user_authorized`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
    .then(resp => resp.json())
    .then(data => console.log(data))
  }

  console.log(user)

  const renderForm = () => {
    switch(form){
      case "login":
        return <LoginForm handleLogin={handleLogin}/>
        break;
      default:
        return <SignUpForm handleLogin={handleLogin}/>
    }
  }
  return (
    <div className="App">
        <Header handleFormSwitch={handleFormSwitch}/>
        {
          renderForm()
        }
        <button onClick={handleAuthClick} className="ui button">Access Authorized Route</button>
        <button onClick={handleAuthClick} className="ui button">Access Authorized Route</button>
    </div>
  );
}

export default UserAuths;