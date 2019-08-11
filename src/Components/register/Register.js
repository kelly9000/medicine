import React from 'react';
import './Register.css';

function Register({cancel}) {
  return (
    <div className="col-lg-11">
    <div className="card mb-3 Register border-secondar">
   

  <div className="row no-gutters">
    <div className="col-md-4">
      <img src="https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/07/medical-logo.jpg" className="card-img" alt="logo"></img>
    </div>
    <div className="col-md-8 bg-light y">
     <h2> Register</h2>
      <div className="card-body">
        <form className=" container">
         
  <div className="form-group row">
  <label for="name" className="col">Name</label>
  <input type="name" className="form-control col" id="name"  placeholder="Enter name"></input>

  </div>
  <div className="form-group row">
    <label for="email" className="col">email</label>
    <input type="email" className="form-control col " id="email" placeholder="Enter email"></input>
  </div>
  <div className="form-group row">
    <label for="password" className="col">Password</label>
    <input type="password" className="form-control col " id="password" placeholder="Password"></input>
  </div>
   <div className="form-group row">
    <label for="cpassword" className="col">Confirm Password</label>
    <input type="cpassword" className="form-control col " id="cpassword" placeholder="Confirm Password"></input>
  </div>
   
  <div className="row">
  <button type="submit" className="btn btn-primary col">Sign up</button>
  <button type="button" class="btn btn-primary col" onClick={cancel}>cancel</button>
  </div>
</form>
      </div>
    </div>
  </div>
</div>
</div>
  );
}

export default Register;
