import React,{Component} from 'react';
import Card from './Components/card/Card';
import faker from 'faker';
import _ from 'lodash';
import {Icon} from 'semantic-ui-react';
import Searchcomponent from './Components/search/Search';
import "./Home.css";
import Popup from "reactjs-popup";
import Login from './Components/login/Login';

import Register from './Components/register/Register';
const source = _.times(10, () => ({
  title: faker.commerce.productName(),
  desc: faker.lorem.paragraph(),
  image: faker.image.sports(),
  price: faker.commerce.price(),
  dis : "20"
}))

class Home extends Component{
	constructor(props) {
    super(props);
    this.state = {
     signinopen: false,
     registeropen:false,
     home:"active",
     myorder : "inactive",
     profile : "inactive",
     signedin : false
     };
    this.opensignin = this.opensignin.bind(this);
    this.closesignin = this.closesignin.bind(this);
     this.openregister = this.openregister.bind(this);
    this.closeregister = this.closeregister.bind(this);
      this. homeactive = this. homeactive.bind(this);
    this.myorderactive = this.myorderactive.bind(this);
	 this.profileactive = this.profileactive.bind(this);
  }
  opensignin() {
    this.setState({ signinopen: true });
    console.log("signin",this.state.signinopen);
  }
  closesignin() {
    this.setState({ signinopen: false });
     console.log("signin",this.state.signinopen);
  }
   openregister() {
    this.setState({ registeropen: true });
         console.log("register",this.state.registeropen)
  }
  closeregister() {
    this.setState({ registeropen: false });
     console.log("register",this.state.registeropen);
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
render(){
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
       <li className="nav-item btn-group">
       <Popup
       	  open={this.state.signinopen}
        trigger={  <a className="nav-link" href="#">	sign in <Icon name='sign-in' size='large' /> </a>}
        position=" center center"
        modal
        closeOnDocumentClick
         onClose={this.closesignin}
         onOpen= {this.opensignin}
        > 
         <div><Login cancel={this.closesignin}/></div>
  </Popup>
   <Popup
   className="col-lg-13"
       	  open={this.state.registeropen}
        trigger={ <a className="nav-link" href="#">	sign up <Icon name='signup' size='large' /> </a>}
        position=" center center"
        modal
        closeOnDocumentClick
         onClose={this.closeregister}
         onOpen= {this.openregister}
        > 
         <div><Register cancel={this.closeregister}/></div>
  </Popup>
       
   			
   		 
   			

       </li>
     
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