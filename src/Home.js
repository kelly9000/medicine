import React,{Component} from 'react';
import Card from './Components/card/Card';
import faker from 'faker';
import _ from 'lodash';
import {Icon,Item} from 'semantic-ui-react';
import Searchcomponent from './Components/search/Search';
import "./Home.css";
import Popup from "reactjs-popup";
import Login from './Components/login/Login';

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
const source = _.times(1, () => ({
  title: faker.commerce.productName(),
  desc: faker.lorem.paragraph(),
  image: faker.image.sports(),
  price: faker.commerce.price(),
  dis : "20"
}))
let paragraph=faker.lorem.paragraph();


class Home extends Component{
	
	constructor(props) {
    super(props);
    this.state = {
     signinopen: false,
     registeropen:false,
     home:"active",
     myorder : "inactive",
     profile : "inactive",
     signedin : false,
    
     };
    this.opensignin = this.opensignin.bind(this);
    this.closesignin = this.closesignin.bind(this);
     this.openregister = this.openregister.bind(this);
    this.closeregister = this.closeregister.bind(this);
      this. homeactive = this. homeactive.bind(this);
    this.myorderactive = this.myorderactive.bind(this);
	 this.profileactive = this.profileactive.bind(this);
	 this.trylogin = this.trylogin.bind(this);
	  this.signout = this.signout.bind(this);
	  let obj=this;
firebase.auth().onAuthStateChanged(function(user) {

  if (user) {
  	
   obj.setState({
   	user:user,
   	signedin:true

   });
   console.log(obj.state);
  } else {
  	console.log("check");
     obj.setState({user:false});
  }
});
	 
  }
  opensignin() {
    this.setState({ signinopen: true });
   
  }
  closesignin() {
    this.setState({ signinopen: false });
  
  }
   openregister() {
    this.setState({ registeropen: true });
      
  }
  closeregister() {
    this.setState({ registeropen: false });
 
  }
  homeactive(){
  	this.setState({ 
  		home: "active",
  		myorder :"inactive",
  		profile : "inactive"
  	 });
  }
  
  myorderactive(){
this.setState({ 
  		home: "inactive",
  		myorder :"active",
  		profile : "inactive"
  	 });
  }

  profileactive(){
  	this.setState({ 
  		home: "inactive",
  		myorder :"inactive",
  		profile : "active"
  	 });
  }

//try login
trylogin(status=false){
	let x=this;
console.log("Login status",status);
if(status)
{	this.setState({
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
	this.setState({
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
		button= <li className="nav-item btn-group">
	       <Popup
	       	  open={this.state.signinopen}
	        trigger={  <a className="nav-link" href="#">	sign in <Icon name='sign-in' size='large' /> </a>}
	        position=" center center"
	        modal
	        closeOnDocumentClick
	         onClose={this.closesignin}
	         onOpen= {this.opensignin}
	        > 
	         <div><Login cancel={this.closesignin} login={this.trylogin} firebase={firebase}/></div>
	  </Popup>
	   <Popup
	       	  open={this.state.registeropen}
	        trigger={ <a className="nav-link" href="#">	sign up <Icon name='signup' size='large' /> </a>}
	        position=" center center"
	        modal
	        closeOnDocumentClick
	         onClose={this.closeregister}
	         onOpen= {this.openregister}
	        > 
	         <div><Register cancel={this.closeregister} firebase={firebase} register={this.trylogin}/></div>
	  </Popup>
	          </li>;
	    }else{
	    	button = <li className="nav-item btn-group active "   >
         <a className="nav-link"   href="#" onClick={this.signout}>Signout <Icon name='sign-out' size='large' /> </a>
         <a className="nav-link" href="#"> Welcome {this.state.user.displayName} <Icon name='user' size='large' /> </a>
      
      </li>;
	    }
		return(
		<div>
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#"> <Icon name='leaf' size='large' /> MedLife </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item" className={this.state.home} onClick={this.homeactive}>
        <a className="nav-link" href="#">Home  <Icon name='home' size='large' /> </a>
      </li>
      <li className="nav-item" className={this.state.myorder} onClick={this.myorderactive}>
        <a className="nav-link"   href="#">My Orders  <Icon name='cart' size='large' /> </a>
      </li>
      <li className="nav-item " className={this.state.profile} onClick={this.profileactive} >
         <a className="nav-link"   href="#">Profile <Icon name='user' size='large' /> </a>
      
      </li>
     
      <li className=" wd" align="center"> 
       <Searchcomponent   />
      </li>
     {button}
       

 		</ul>
       
    
   
   
    
  </div>
</nav>
	<div className="">
        	{source.map((data,i)=>{
        	 return	<Card key={i} 
        			  image={data.image}
        			  desc={data.desc}
        			  title={data.title}
        			  price={data.price}
        			  dis={data.dis}
        			  

        		/>
        	})}
        	 

        </div>

        	


		</div>

				
		);
}
} 

export default Home;