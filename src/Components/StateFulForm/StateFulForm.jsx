import { useState } from "react";

const StateFulForm = () => {
    const [name, setName] = useState(`Faisal`); //avame email password name k inspact console dekhabe
    const[email, setEmail] = useState(null);
    const[password, setPassword] = useState(null);
    const [error, setError] = useState('');

    const handleSubmit = e =>{
        e.preventDefault();
        if(password.length < 6){
            setError(`password must be 6 cHARACTERS`)
        }
        else{setError(``)}
        console.log(email, password, name);
    }

    const handleEmailChange = e =>{
     console.log(e.target.value);
     setEmail(e.target.value);
    }

    const handlePasswordChange = e =>{
     setPassword(e.target.value); 
    }

    const handleNameChange = e =>{
        setName(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                onChange={handleNameChange} 
                value={name} type="text" name="name"/>
                <br />
                <input 
                onChange={handleEmailChange}
                type="email" name="email"/>
                <br />
                <input
                onChange={handlePasswordChange}  //required dewar karon hosche ata na deya ami submit korte parbo na
                 type="password" name="password" required/> 
                <br />
                <input type="submit" value="submit" />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StateFulForm;