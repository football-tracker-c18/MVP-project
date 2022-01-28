import React from 'react';
import axios from 'axios';
import Signup from './Signup.jsx';
import Login from './Login.jsx';
import Header from './header.jsx';


class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      view : 0,
      views :0 
    }
    this.changeToSignUp=this.changeToSignUp.bind(this)
    this.changeToLogin=this.changeToLogin.bind(this)
    this.signUp = this.signUp.bind(this)
    this.signUpInput = this.signUpInput.bind(this)
  }
  
  signUp(){
    axios.post("/signup",this.state)
    .then(res=>{console.log(res)
      this.setState({
      view : 0
    })})
    
  }
  signUpInput(e){
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  changeToSignUp(){
    this.setState({
      view : this.state.view+1,
      views : this.state.views+1
    })
  }
  changeToLogin(){
    this.setState({
      view : this.state.view+1,
      views : this.state.views+2
    })
  }
  render(){
    return (
      <div className="App">
        {console.log(this.state.view)}
       {this.state.view === 0 && <Header changeToLogin={this.changeToLogin} changeToSignUp={this.changeToSignUp}/>}
       {this.state.views === 1 && <Signup signUp={this.signUp} signUpInput={this.signUpInput}/>}
       {this.state.views === 2 && <Login />}
      </div>
    );
  }
 
}

export default App;
