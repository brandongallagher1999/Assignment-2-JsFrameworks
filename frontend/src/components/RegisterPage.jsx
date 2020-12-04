import {useForm} from "react-hook-form";
import {Fragment, useState} from "react";
import NavBar from "./NavBar";
const axios = require("axios");


const LoginPage = () =>
{

    const { register, handleSubmit} = useForm();

    const [passwordVerify, setPassVerify] = useState("Confirm password");

    const onSubmit = async (data) =>
    {
        console.log(data.password);
        console.log(data.passwordConfirm);
        if (data.password === data.passwordConfirm)
        {
            await axios.post(
                "https://localhost:3001/api/register",
                data)
            .then(() => window.location.href = "http://localhost:3000/");
        }
        else
        {
            setPassVerify("Passwords are not equivalent. Please try again.");
        }
        
    }

    return(
        <Fragment>
            <div className="container">
                <header>
                    <h1>Register</h1>
                </header>
                <div className="loginForm">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input id="username" className="username" type="text" name="username" ref={register}></input><br></br>
                        <input id="password" className="password" type="password" name="password" ref={register}></input><br></br>
                        <p style={{ color : "red", fontWeight : "bold"}}> {passwordVerify}</p>
                        <input id="passwordConfirm" className="password" type="password" name="passwordConfirm" ref={register}></input><br></br>
                        
                        <input id="submit" className="submit" type="submit" name="submit" value="Register"></input>
                    </form>
                </div>
                
            </div>
        </Fragment>
        

    );

}

export default LoginPage;