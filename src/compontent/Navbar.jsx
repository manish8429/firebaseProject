import React from "react";
import { getAuth } from "firebase/auth";
import { useNavigate, Link , useLocation} from "react-router-dom"


const Navbar = () => {
  const auth = getAuth();
  const navigate = useNavigate()
  const location = useLocation()

  const logout = () => {
    auth.signOut();
    navigate('/')

  };

  return (
    <> 
      <div className="bg-primary d-flex align-items-center p-1" style={{justifyContent:'space-between'}}>
        <div className="user-content d-flex justify-content-center align-items-center">
          <img src={auth.currentUser.photoURL} alt="" style={{width:'20%', borderRadius:'50%',marginRight:'1rem'}}/>
          <h2>{auth.currentUser.displayName}</h2>
        </div>

        <div className="email d-flex justify-content-center" style={{gap:'1rem'}}> 
         { location.pathname === '/blogs' && (<Link to={'/addBlog'} className="btn btn-warning"> AddBlog</Link>)}
         { location.pathname !== '/blogs' && (<Link to={'/blogs'} className="btn btn-warning"> BackToBlog</Link>)}
          <h4>{auth.currentUser.email}</h4>
          <button className="btn btn-danger" onClick={logout}> LogOut</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
