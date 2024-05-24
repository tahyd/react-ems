import { hasFormSubmit } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Home() {

    const [user,setUser] = useState({"username":"","password":""});
    const [loginError,setLoginError] = useState();

    const navigate = useNavigate();

    const changeHandler = (event)=>{
      const name = event.target.name;
      const value= event.target.value;
      setUser((values)=>({...values,[name]:value}))

    }

  const  handleSubmit = (event)=>{
             event.preventDefault();

           if(user.username === "krishna" && user.password==="12345"){
            navigate('/employee')
           }else{
            setLoginError('Invalid Username or password')
           }

    }
  return (
    <div>

           <div className='login-form'>
            <h4>Login Here</h4>

           {
            loginError?<p>{loginError}</p>:null
           }
             <form onSubmit={handleSubmit}>
  
              <table>

                <tr>
                  <td><label>User Name :</label></td>
                  <td><input type='text'name="username" value={user.username} onChange={changeHandler}/></td>
                </tr>
                <tr>
                  <td><label>Password :</label></td>
                  <td><input type='password'name="password" value={user.password} onChange={changeHandler}/></td>
                </tr>
                <tr>
                 
                  <td><input type='submit'/></td>
                </tr>
              </table>
             </form>
           </div>

    </div>
  )
}
