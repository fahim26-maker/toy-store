import React, { useState } from 'react';
import { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';

const Register = () => {
    const { createUser, setUser, updateUser} = use(AuthContext)
            const [passwordError, setpasswordError] = useState("");
        const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        console.log(e.target);
        const form = e.target ;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        if(password.length < 6) {
            setpasswordError("PASSWORD SHOULD BE MORE THAN 5 CHARACTER")
        }else {
            setpasswordError("");
        }
        console.log({name,photo,email,password})
        createUser(email, password)
        .then((result) => {
            const user = result.user;
            // console.log(user);
            updateUser({ displayName: name, photoURL: photo})
            .then(() => {
            setUser({...user, displayName: name, photoURL: photo});
            });
            navigate("/")
            .catch((error) => {
                console.log(error);
                setUser(user);
            })

        })
        .catch((error) => {
            const errorMessage = error.errorMessage;
            alert(errorMessage)
        })
    };
    return (
        <div>
             <div className=' flex justify-center min-h-screen items-center'>
             <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className=' font-semibold text-2xl text-center mt-4'>Register your account</h1>
      <form onSubmit={handleRegister} className="card-body">
        <fieldset className="fieldset">
          <label className="label">Name</label>
          <input name='name' type="text" className="input" placeholder="Name" required/>
          <label className="label">Photo URL</label>
          <input name='photo' type="text" className="input" placeholder="Photo URL" required/>
          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" required/>
          <label className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Password" required/>
          {passwordError && <p className='text-xs text-red-400'>{passwordError}</p>}
          <div><a className="link link-hover">Forgot password?</a></div>
          <button type='submit' className="btn btn-neutral mt-4">Register</button>
        <p className='text-center font-semibold pt-4'>Already have an account ? <Link to={"/auth/login"} className=' text-secondary'>Login</Link></p>
        </fieldset>
      </form>
    </div>
        </div>
        </div>
    );
};

export default Register;