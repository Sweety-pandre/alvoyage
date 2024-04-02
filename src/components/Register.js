import React from 'react';
import {  useState } from 'react';
import { useFirebase } from '../context/firebase.jsx';
import { Link } from 'react-router-dom';



function Register() {

    const firebase = useFirebase();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
   
    const handleSubmit = async(e) => {
        e.preventDefault();
       try{
         await firebase.createUser(email,password).then(alert("User created!"));
    }
    catch(error){
        alert(error);
    }
  
        }  
          return (

        <div className="contain">

            <div className="left">
                <div className="leftContain">

                    <h2 className="title">
                        <span className="title-word title-word-1">AL</span>
                        <span className="title-word title-word-2">vo</span>
                        <span className="title-word title-word-3">ya</span>
                        <span className="title-word title-word-4">ge</span>
                    </h2>
                    <h4 style={{ color: 'white' }}>Find the best travel plan.... </h4>
                </div>

            </div>

            <div className="formContain">
                <div className="formWrap">
                <img style={{height:'45px'}} src="" alt="logo" /> 

                    <p>Register to generate your travel plan!</p>

                    <form onSubmit={handleSubmit} className='form'>
                        <input type="text" placeholder="Enter your name here " className="formEl" />
                        <input type="text"
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)} placeholder="Enter your email " className="formEl" />

                        <input type="password" 
                        value={password} 
                        onChange={(e)=> setPassword(e.target.value)} placeholder="Password" className="formEl" />


                        <button type="submit"  className='submitBtn'>Register</button>
                    </form>
                    <p style={{paddingBottom:'10px'}}>or you can also register using</p>
                    <div style={{margin:'auto', marginTop:'0'}}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdby_ZE048_VtvktPmb1zRKPsIeBMZmVZpRg&usqp=CAU" style={{borderRadius:'50%', width:'30px' , height:'30px'}} alt="" /></div>
                    
                    <div style={{display:'flex', justifyContent:'space-between'}}>
                        <p  style={{margin:'0', padding:'0'}}>Forget Password?</p>
                        <p style={{margin: '0', padding:'0'}}><Link to="/">SignIn</Link></p>
                    </div>

                </div></div>
        </div>

    )
}

export default Register;