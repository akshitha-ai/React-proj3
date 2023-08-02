import React, {useState} from "react"

export const Register=(props) => {
    const {email,setEmail} = useState('');
    const {pass,setPass} = useState('');
    const {Name,setName} = useState('');
    const {phnno,setPhnno} = useState('');

    const handlesubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    
    return (
        <div className="auth-form-container">
        <form onSubmit={handlesubmit}>
            <label htmlFor="Name">Full Name</label>
            <input value={Name} onChange={(e) => setName(e.target.value)} type="text" placeholder="yourname" id="name"Name name=""/>
            <label htmlFor="phnno">Phone Number</label>
            <input value={phnno} onChange={(e) => setPhnno(e.target.value)} type="phnno" placeholder="789" id="phnno" name="phnno"/>
            <label htmlFor="email">Email</label>
            <input value={pass} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email"/>
            <label htmlFor="">Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*******" id="password" name="password"/>
            <button type="submit">Login</button>
        </form>
        <button onClick={() => props.onFormSwitch('register')}>Already have an account? Login here.</button>
        </div>
    )
}