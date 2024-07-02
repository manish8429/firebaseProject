import React from 'react'
import { auth } from '../firebase'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';



const Login = () => {
const navigate = useNavigate();


const googleClick = async () => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);

  // console.log(result)
  navigate('/blogs')
}

  return (
    <div className='container'>
    <div className= '' style={{display: 'flex', justifyContent: 'center' ,alignItems: 'center', height: '100vh'}}>
     <img onClick={googleClick} src='./images/logogoogle.png' alts=''/>
    </div>
  
     </div>
  )
}

export default Login