import React from 'react';
import './Login.css';


function Login({cancel}) {
  return (
    <div className="col-lg-13 login">
    <div className="card mb-3  border-secondar">
   

  <div className="row no-gutters">
    <div className="col-md-4">
      <img src="https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/07/medical-logo.jpg" className="card-img" alt="logo"></img>
    </div>
    <div className="col-md-8 bg-light y">
     <h2> Login</h2>
      <div className="card-body">
        <form>
  <div className="form-group">
    <label for="email">Email address</label>
    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"></input>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="password">Password</label>
    <input type="password" className="form-control " id="password" placeholder="Password"></input>
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
  <button type="button" class="btn btn-primary" onClick={cancel}>Cancel</button>
</form>
      </div>
    </div>
  </div>
</div>
</div>
  );
}

export default Login;
