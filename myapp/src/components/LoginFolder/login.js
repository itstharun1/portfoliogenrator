import {Component} from 'react'

import './login.css'

import logina from './logina.json';

import Lottie from "lottie-react"

class Login extends Component{

    state={
        email:"",
        password:""
    }

    userEmail=(e)=>{
        this.setState({email: e.target.value})
    }
    userPass=(e)=>{
        this.setState({password: e.target.value})
    }
    onLogin=()=>{

        const {email,password}=this.state

        if(email===""||password==="")
        {return alert("Please enter all fields.")}
        else{
            alert("Login sucess")
            window.location.href='/home'
        }

        
    }

    onCreate=()=>{
        window.location.href='/';

    }

    render(){
        return(
            <div className='container'>
                <div>
                <Lottie className='img-login' animationData={logina}/>
                </div>
                <div className='login-page'>
                    <h1>Welcome Back!</h1>
                    <div>
                        <input onChange={this.userEmail} className='inputBox' placeholder='Email' type='text' />  <br></br>
                        <input onChange={this.userPass} className='inputBox' placeholder='Password' type='text' />   <br></br>
                        <button onClick={this.onLogin}>Login</button>  
                        <p>(or)</p>
                        <button onClick={this.onCreate}>Create Account</button>              
                    </div>
                    
                </div>
            </div>

        )
    }
}


export default Login