import {Component} from 'react'

import './login.css'

import registera from './registera.json';

import Lottie from "lottie-react"

class Register extends Component{

    state={
        email:"",
        password: "",
        name:"",
    }

    nameInput=(event)=>{
        let name1= event.target.value;
        this.setState({name : name1})
    }
    emailInput = (event) =>{ 
        let value = event.target.value;
        this.setState({email: value});
    }
    passInput=(event)=>{
        let val=event.target.value;
        this.setState({password:val})
    }

    onLogin=()=>{
        window.location.href='/LoginPage';
    }

    onRegister=()=>{
        const {name,password,email}=this.state;
        if(name==="" || password===""||email===""){
            alert("Please fill all fields");
        }else{
            alert("successfully registered, Please Login");
            window.location.href='/LoginPage';

        }
    }




    render(){
        return(
            <div className='container'>
                <div>
                <Lottie className='img-login' animationData={registera}/>
                </div>
                <div className='login-page'>
                    <h1>Please Register!</h1>
                    <div>
                        <input className='inputBox' onChange={this.nameInput} placeholder='Name' type='text' />  <br></br>
                        <input className='inputBox' onChange={this.emailInput} placeholder='Email' type='text' />   <br></br>
                        <input className='inputBox' onChange={this.passInput} placeholder='Password' type='text' />   <br></br>
                        <button onClick={this.onRegister}>Register</button>  
                        <p>(or)</p>
                        <button onClick={this.onLogin}>Login</button>              
                    </div>
                    
                </div>
            </div>

        )
    }
}


export default Register