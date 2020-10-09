import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import history from './history.js';


export default class RegisterPage extends Component {
    documentData;
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.state = {
            username: '',
            email: '',
            
            pass:''
        }
    }
 
handleChange= (e)=> {
    this.setState({[e.target.name]:e.target.value});
}
// on form submit...
handleFormSubmit(e) {
    e.preventDefault()

    // localStorage.clear();

    var data={};
    this.setState(
        data={ "data" : [this.state] }
    );
    if(!JSON.parse(localStorage.getItem('document'))){
        localStorage.setItem('document',JSON.stringify(data));

       console.log(localStorage.getItem('document'));
        
    }else{
         
        let usersString= localStorage.getItem('document')
        let users = []
        
        users = JSON.parse(usersString)

        for (let index = 0; index < users["data"].length; index++) {
            console.log(users["data"][index]["username"]);
            if(users["data"][index]["username"]!== this.state.username && users["data"][index]["email"] !== this.state.email ){
                users["data"].push(this.state)
                localStorage.clear();
                localStorage.setItem('document', JSON.stringify(users)) 
                console.log(JSON.parse(localStorage.getItem('document')));

                history.push('/home')

            }
            else {
                this.state.error="User Already Exists"
            }
        }
       
        // console.log(users["data"]); 
        // console.log(this.state);
         

        // get and check username and pass

        // let newusersString = localStorage.getItem('document')
        // let v=[];
        // v=JSON.parse(newusersString);
        // // console.log(v["data"].length);
        // for (let index = 0; index < v["data"].length; index++) {
        //     console.log(v["data"][index]["title"]);
        // }    
    }
}
 
// React Life Cycle
componentDidMount() {
//     this.documentData = JSON.parse(localStorage.getItem('document'));
 
//     if (localStorage.getItem('document')) {
//         this.setState({
//             title: this.documentData.title,
//            description: this.documentData.description,
//            price: this.documentData.price
//     })
// } else {
//     this.setState({
//         title: '',
//         description: '',
//         price: ''
//     })
// }
}

myFunction() {
    var x = document.getElementById("pass");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
 
render() {
    return (
        <div id="main-registration-container">
        <div className="reg">
        <div className="container" id="register">
        <h3>Registration Page</h3>
            <form onSubmit={this.handleFormSubmit}>
                <div className="form-group">
                    <label>Username:</label>
                    <input required type="text" name="username" className="form-control" value={this.state.username} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input required type="email" name="email" className="form-control" value={this.state.email} onChange={this.handleChange} />
                </div>
                {/* <div className="form-group">
                    <label>Phone:</label>
                    <input required type="text" name="phone" className="form-control" value={this.state.phome} onChange={this.handleChange} />
                </div> */}
                <div className="form-group">
                    <label>Password:</label>
                <input required type="password" name="pass" id="pass" className="form-control" value={this.state.pass} onChange={this.handleChange} />
                    
                </div>
                <div className="checkbox">
                    <label>Show Password
                    <input type="checkbox" className="check" onClick={this.myFunction}/>
                    </label>
                
                
                </div>
                <div className="errorMsg">{this.state.error}</div>
                
                <button type="submit" className="btn btn-primary btn-block">Register</button>
            </form>
            <small>You have already registered?</small>
            <div>
                <button  className="btn btn-primary btn-block" value="Login" variant="btn btn-success"  onClick={() => history.push('/login')}>Login</button>  
            </div>
        </div>
        </div>
        </div>
    )
}
}