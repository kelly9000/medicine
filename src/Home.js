import React,{Component} from 'react';
import {Icon,Item} from 'semantic-ui-react';
import Searchcomponent from './Components/search/Search';
import "./Home.css";
import Popup from "reactjs-popup";
import Login from './Components/login/Login';
import Body from './Body';
import Register from './Components/register/Register';
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAuCg2E3sWkzwwmAT-3W7iu5RNN-C0r87U",
    authDomain: "med-life.firebaseapp.com",
    databaseURL: "https://med-life.firebaseio.com",
    projectId: "med-life",
    storageBucket: "",
    messagingSenderId: "799069840222",
    appId: "1:799069840222:web:0957d160b3d30bb8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

class Home extends Component{
	
	constructor(props) {
    super(props);
    this.state = {
     signinopen: false,
     registeropen:false,
     home:"active",
     myorder : "inactive",
     signedin : false,
     tab:"home"
    
     };
    this.signinbox = this.signinbox.bind(this);
   
     this.registerbox = this.registerbox.bind(this);
    
	 this.activestate = this.activestate.bind(this);
	 this.trylogin = this.trylogin.bind(this);
	  this.signout = this.signout.bind(this);
	  let obj=this;
firebase.auth().onAuthStateChanged(function(user) {

  if (user) {
  	
   obj.setState({
   	user:user,
   	signedin:true

   });
  } else {
  	console.log("check");
     obj.setState({user:false});
  }
});
	 
  }
  signinbox(status) {
    this.setState({ signinopen: status });
   
  }
 
   registerbox(status) {
    this.setState({ registeropen: status });
      
  }
//check which tab in current
  activestate(tab){
    switch(tab){
      case "home":
        this.setState({ 
         home: "active",
         myorder :"inactive",
        
         });
          break;
      case "myorder" :
        this.setState({ 
         home: "inactive",
         myorder :"active"

         });
          break;
       default :
        this.setState({ 
         home: "active",
         myorder :"inactive",
        
         });  
       }
      this.setState({ 
         tab:tab

         }); 
  
  }
  

//try login
trylogin(status=false){
	let x=this;
console.log("Login status",status);
if(status)
{	x.setState({
			signedin:true
		});
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    x.setState({user:user});
  } else {
     x.setState({user:false});

  }
});

}else{
	x.setState({
			signedin:false
		});
}
console.log("signedin ",this.state.signedin);
}
//do signout stuff here
signout(){
	firebase.auth().signOut().then(function() {
  window.alert("logged out");
}).catch(function(error) {
   window.alert("something went wrong");
});
	this.setState({
			signedin:false,
			signinopen: false ,
			 registeropen: false
		});
}


render(){
	const signinstatus=this.state.signedin;
	let button;
	if(!signinstatus){
		button= <li className="nav-item btn-group" >
	       <Popup 
	       	  open={this.state.signinopen}
	        trigger={  <a className="nav-link" href="#" align="right" >	sign in <Icon name='sign-in' size='large' /> </a>}
	        position=" center center"
	        modal
	        closeOnDocumentClick
	         onClose={()=>this.signinbox(false)}
	         onOpen= {()=>this.signinbox(true)}
	        > 
	         <div><Login cancel={()=>this.signinbox(false)} login={this.trylogin} firebase={firebase}/></div>
	  </Popup>
	   <Popup
	       	  open={this.state.registeropen}
	        trigger={ <a className="nav-link" href="#" align="right" >	sign up <Icon name='signup' size='large' /> </a>}
	        position=" center center"
	        modal
	        closeOnDocumentClick
	         onClose={()=>this.registerbox(false)}
	         onOpen= {()=>this.registerbox(true)}
	        > 
	         <div><Register cancel={()=>this.registerbox(false)} firebase={firebase} register={this.trylogin}/></div>
	  </Popup>
	          </li>;
	    }else{
	    	button = <li className="nav-item btn-group active " align="right"   >
         <a className="nav-link"   href="#" onClick={this.signout}>Signout <Icon name='sign-out' size='large' /> </a>
         <a className="nav-link" href="#"> Welcome {this.state.user.displayName} <Icon name='user' size='large' /> </a>
      
      </li>;
	    }
		return(
		<div align="center">
		<nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark" align="left">
  <a className="navbar-brand" href="#"> <Icon name='leaf' size='large' /> MedLife </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item" className={this.state.home} onClick={()=>this.activestate("home")}>
        <a className="nav-link" href="#">Home  <Icon name='home' size='large' /> </a>
      </li>
      <li className="nav-item" className={this.state.myorder} onClick={()=>this.activestate("myorder")}>
        <a className="nav-link"   href="#">My Orders  <Icon name='cart' size='large' /> </a>
      </li>
     
      <li align="center"> 
       <Searchcomponent className=" wd"   />
      </li>
     
     {button}
      
 		</ul>
       
    
   
   
    
  </div>
   </nav>
    <Body tab={this.state.tab}/>
  </div>

				
		);
}
} 

export default Home;