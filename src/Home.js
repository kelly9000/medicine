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
const source = _.times(2, () => ({
  title: faker.commerce.productName(),
  desc: faker.lorem.paragraph(),
  image: faker.image.fashion(),
  price: faker.commerce.price(),
  dis : "20"
}))

class Home extends Component{
	constructor(props) {
    super(props);
    this.state = {
     signinopen: false,
     registeropen:false
     };
    this.opensignin = this.opensignin.bind(this);
    this.closesignin = this.closesignin.bind(this);
     this.openregister = this.openregister.bind(this);
    this.closeregister = this.closeregister.bind(this);
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
      <li className="nav-item active">
        <a className="nav-link" href="#">Home  <Icon name='home' size='large' /> </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">My Orders  <Icon name='cart' size='large' /> </a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Profile <Icon name='user' size='large' />
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">View Profile</a>
          <a className="dropdown-item" href="#">Edit Profile</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Change address</a>
        </div>
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