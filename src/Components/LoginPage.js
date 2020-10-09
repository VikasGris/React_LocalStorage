import React, { Component } from 'react';
import history from './history';
import {Button} from 'react-bootstrap';



class Login extends React.Component{
    documentData;
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.state = {
            email: '',
            pass:'',
            error:''
        }
    }

    handleChange= (e)=> {
        this.setState({[e.target.name]:e.target.value});
    }
    // on form submit...
    handleLogin(e) {
        e.preventDefault()

        let newusersString = localStorage.getItem('document')
        let users=[];
        users=JSON.parse(newusersString);
        console.log(users["data"]);
        for (let index = 0; index < users["data"].length; index++) {
            console.log(users["data"][index]["email"]);

            if(users["data"][index]["email"] == this.state.email && users["data"][index]["pass"]==this.state.pass){
                history.push('/home')

                console.log("success");
            }
            else{
                this.state.error="Doesn't Match Email and Password"
            }
        } 
    }
    myFunction() {
        var x = document.getElementById("pass");
        if (x.type === "password") {
          x.type = "text";
        } else {
          x.type = "password";
        }
      }
     
    
    render(){
        return(
            <div>
                <div id="main-registration-container">
                    <div id="register">
                        <h3>Login Page</h3>
                        <form method="post"  name="userLoginForm" onSubmit={this.handleLogin}>
                        <label>Email ID:</label>
                        <input required type="text" name="email" value={this.state.email} onChange={this.handleChange}/>
                        <div className="errorMsg"></div>
                        <label>Password</label>
                        <input required type="password" name="pass" id="pass" value={this.state.pass} onChange={this.handleChange}/>
                        <div className="checkbox">
                        <label>Show Password
                        <input type="checkbox" className="check" onClick={this.myFunction}/>
                        </label>
                        </div>
                        <div className="errorMsg">{this.state.error}</div>
                        <button  className="button" value="Login" variant="btn btn-primary btn-block">Login</button>
                        <small>You don't have an Account?</small>
                        <Button  className="button" value="Register" variant="btn btn-primary btn-block" onClick={() => history.push('/')} >Create Account</Button>  
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default Login;