import React from 'react';
import axios from 'axios';
import Signup from './Signup.jsx';
import Login from './Login.jsx';
import Header from './header.jsx';
import UI from './UI.jsx';
import soccer from './picturs/stade.jpg'
import Team from './Team.jsx';
// import front from "./picturs/front.jpg";



class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      view : 0,
      views :0,
      err : 0,
      teams : 0,
      data : [],
      playerData : [],
      vieww :0,
      gkdata : [],
      defdata : [],
      middata : [],
      atkdata : []
    }
    this.changeToSignUp=this.changeToSignUp.bind(this)
    this.changeToLogin=this.changeToLogin.bind(this)
    this.signUp = this.signUp.bind(this)
    this.signUpInput = this.signUpInput.bind(this)
    this.login = this.login.bind(this)
    this.delete = this.delete.bind(this)
  }
  
  
  login(){
    axios.get("/api/football")
    .then(res=>{
      this.setState({
        playerData :  res.data,

      })
    })
    .then(res=>{
      console.log(this.state)
      axios.get(`/api/football/login/${this.state.name}/${this.state.playnumber}`,this.state)
      .then(res=>{
        if(res.data.length>0){
          this.setState({
            err: 0,
            data :  res.data,
            views : this.state.views+1 
          })
        }else{
          this.setState({
            err : this.state.err+1
          })
        }
      })
    })
    
  }
  
  delete(){
    axios.delete('/api/football/delete',this.state)
    .then(res=>{
      axios.get("/api/football")
        .then(res=>{
        this.setState({
          playerData :  res.data
        })
      })
  })
}



  signUp(){
    axios.post("/api/football/signup",this.state)
    .then(res=>{console.log(res)
      this.setState({
      view : 1,
      views : 3
    })})
  }
  signUpInput(e){
    this.setState({
      [e.target.name] : e.target.value
    })
  }

click(){
  axios.get("/api/football")
  .then(res=>{
    this.setState({
      playerData :  res.data
    })
    axios.post(`/api/football/manager/team/${this.state.playname}/${this.state.playnumber}/${this.state.playpos}`,this.state)
    .then(res=>{
      console.log(res,"haha")
      this.setState({
        playerData: this.state.playerData.concat(res.data),
        vieww : this.state.vieww+1,
        teams : this.state.teams+1
      })
    })
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
  changeToUI(){
    axios.get("/api/football/gk",this.state)
    .then(result=>{
      this.setState({
        gkdata : result.data
      })
      axios.get("/api/football/def",this.state)
      .then(result=>{
        this.setState({
          defdata : result.data
        })
        axios.get("/api/football/mid",this.state)
        .then(result=>{
          this.setState({
            middata:result.data
          })
          axios.get("/api/football/atk",this.state)
          .then(result=>{
            this.setState({
              atkdata : result.data
            })
          })
        })
      })
    })
    this.setState({
      views : 4
    })
  }
  render(){
    return (
      <div className="App">
        {console.log(this.state)}
       {this.state.view === 0 && <Header changeToLogin={this.changeToLogin} changeToSignUp={this.changeToSignUp}/>}
       {this.state.views === 1 && <Signup signUp={this.signUp} signUpInput={this.signUpInput}/>}
       {this.state.views === 2 && <Login err={this.state.err} signUpInput={this.signUpInput} login={this.login}/>}
       {this.state.views === 3 && <Team delete={this.delete} changeToUI={this.changeToUI.bind(this)} view={this.state.vieww} playerData={this.state.playerData} number={this.state.teams} click={this.click.bind(this)} signUpInput={this.signUpInput} />}
       {this.state.views === 4 && <UI  gk={this.state.gkdata} def={this.state.defdata} mid={this.state.middata} atk={this.state.atkdata} img={soccer}/>}
      </div>
    );
  }
 
}

export default App;
