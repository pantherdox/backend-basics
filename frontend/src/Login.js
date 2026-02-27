import {useState} from "react";
import axios from "axios"

function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try{
            const res = await axios.post(
                "http://localhost:5051/auth/login",
                {email, password}
            )

            localStorage.setItem("token", res.data.token)
            alert("Login Successful")
        }catch(err){
            alert("Login Failed")
        }
    }

    return(
        <div>
            <h1>Login</h1>

            <input
             type="email"
             placeholder="Enter your email"
             onChange={e => setEmail(e.target.value)}
            />

            <input
             type="password"
             placeholder="Enter your password"
             onChange={e => setPassword(e.target.value)}
            />

            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login;