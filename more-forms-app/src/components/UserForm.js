import React, {useState} from 'react';

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("")

    

    return (
        <div>
            <br/>
            <br/>
            <form>
                <div>
                    <label htmlFor='firstName'>First Name: </label>
                    <input type='text' onChange={(e)=>setFirstName(e.target.value)}/>
                    <p id="error">{firstName.length < 2 ? "First name must be at least 2 characters in length" : null}</p>
                </div>
                <div>
                    <label htmlFor='lastName'>Last Name: </label>
                    <input type='text' onChange={(e)=>setLastName(e.target.value)}/>
                    <p id="error">{lastName.length < 2 ? "Last name must be at least 2 characters in length" : null}</p>
                </div>
                <div>
                    <label htmlFor='email'>Email: </label>
                    <input type='email' onChange={(e)=>setEmail(e.target.value)} />
                    <p id="error">{email.length < 2 ? "email must be at least 5 characters in length" : null}</p>
                </div>
                <div>
                    <label htmlFor='password'>Password: </label>
                    <input type='password' onChange={(e)=>setPassword(e.target.value)}/>
                    <p id="error">{password.length < 8 ? "Password must be at least 8 characters" : null}</p>
                </div>
                <div>
                    <label htmlFor='confirmPassword'>Confirm Password: </label>
                    <input type='password' onChange={(e)=>setConfirmPassword(e.target.value)} />
                    <p id="error">{password !== confirmPassword ? "Passwords must match"  : null}</p>
                </div>
            </form>
            <br/>
            <hr/>
            <br/>
            <h1>Form Data</h1>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmPassword}</p>
        </div>
    )
}

export default UserForm;