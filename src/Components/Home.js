import React, { Component } from 'react';
import history from './history';
import '../App.css';
import {Button, button} from 'react-bootstrap';



class Home extends React.Component{
    
    state={
        profileImg:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
      }
      imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () =>{
          if(reader.readyState === 2){
            this.setState({profileImg: reader.result})
          }
        }
        reader.readAsDataURL(e.target.files[0])
      };

     
    render(){
        const { profileImg } = this.state
        return(
            <div>   
                <h1 className="heading">Profile</h1>
                <Button  className="button" id="logout" name="logout" value="Register" variant="btn btn-success" onClick={() => history.push('/login')} >Logout</Button>  
                        <div id="main-registration-container">
                            <div id="register">
                            <div className="con"> 
                    <div className="img-holder">
                        <img src={profileImg} alt="" id="img" className="img" />
                    </div>
                    <input type="file" accept="image/*" name="image-upload" id="input" onChange={this.imageHandler} required/>
                        <div className="label">
                            <label className="image-upload" htmlFor="input">
                                <i className="material-icons">add_a_photo</i>
                            </label>
                        </div>
                        </div>
                        <form method="post"  name="userRegistrationForm" >
                                <label>Profile Name:</label>
                                <input type="text" name="profile" required />
                                <div className="errorMsg"></div>
                                <label>Mobile No:</label>
                                <input type="number" name="mobileno" required />
                                <div className="errorMsg"></div>
                                <label>Bio:</label>
                                <input required type="text" name="bio" />
                                <div className="errorMsg"></div>
                                <label>Date Of Birth:</label>
                                <input required type="date" name="dob" />
                                <div className="errorMsg"></div>
                                <label for="gen">Select Gender:</label>
                                    <select name="gen" id="cars" required >
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Others</option>
                                    </select>
                                    <br></br><br></br>
                                <div className="errorMsg">{this.state.error}</div>

                                <Button  className="button" value="Login" variant="btn btn-success" onClick={() => history.push('/update')}>Update Profile</Button>  
                                </form>
                            </div>
                        </div>
                </div>
            );
        }
    }
export default Home;