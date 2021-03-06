import Header from "./Header";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom"
import { Link } from "react-router-dom"

function Login() {
    const history = useHistory();
    useEffect(() => {
        let login = localStorage.getItem("login-info");
        console.log(login);
        if (login == "true") {
            history.push("./");
            // history("/");
        }
    }, [])

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [emailErr, setEmailErr] = useState(false);
    const [passErr, setPassErr] = useState(false);

    // Login Form submit
    async function LoginHandle(e) {
        e.preventDefault();
        console.log("Login Form");
        if (email == "" || password == "") {
            alert("Oops ! Blank not accept ! Please enter value");
        }
        else if (email.length <= 3 || password.length <= 3) {
            alert("Password size not valid. Enter 4 digit value !")
        }
        else {
            let data = { email }; // Object not exist Url
            console.log(data);
            console.log(email); // Exist Url

            // fetch API url and Get Data from API
            let result = await fetch("http://localhost:8000/users?q=" + email);
            result = await result.json();
            //console.log(result);
            if (result.length > 0) {
                alert("Success ! You are Logged In");
                //Store data and redirect page
                localStorage.setItem("login-info", JSON.stringify(result));
                //console.log(result);
                history.push("./");
                // history("/");
            }
            else {
                alert("Pelase check email and password !")
            }

        }
    }
    // On Change input value:-> Common Hander
    // const handleChange = (e) => {
    //     const user = ({ [e.target.name]: e.target.value });
    //     console.log(user);
    // }

    // On Change input value: Validation
    const emilHandler = (e) => {
        let item = (e.target.value);
        if (item.length <= 3) {
            console.log("Not valid");
            setEmailErr(true);
        }
        else {
            setEmailErr(false);
        }
        console.log(email);
        setEmail(item);
    }

    const passHandler = (e) => {
        let pass = (e.target.value);
        if (pass.length <= 3) {
            console.log("Not valid");
            setPassErr(true);
        }
        else {
            setPassErr(false);
        }
        console.log(pass);
        setPassword(pass);
    }
    return (
        <>
            <Header />
            <section className="py-5">
                <div className="col-sm-6 offset-sm-3 rounded-10 animateT card-box">
                    <form onSubmit={LoginHandle}>
                        <h2 className="text-center mb-4">User Login Form</h2>
                        <div className="form-group">
                            {/* <TextField type="text" name="email" onChange={emilHandler} id="outlined-basic" label="Email" variant="outlined" size="small" className="w-100" /> */}
                            <input type="text" name="email" onChange={emilHandler} className="form-control" placeholder="Email address*" />
                            {emailErr ? <small className="text-danger">Email address not valid</small> : null}
                        </div>
                        <div className="form-group">
                            {/* <TextField type="password" name="password" onChange={passHandler} id="outlined-basic" label="Password" variant="outlined" size="small" className="w-100" /> */}
                            <input type="password" name="password" onChange={passHandler} className="form-control" placeholder="Enter Password*" />
                            {passErr ? <small className="text-danger">Password not valid</small> : null}
                        </div>
                        <div className="d-flex justify-content-between mt-0">
                            <div class="form-group form-check">
                                <label class="form-check-label">
                                    <input class="form-check-input" type="checkbox" />Remember me
                                </label>
                                {/* <Checkbox color="secondary" size="" className="p-0 mr-1" />Remember me */}
                            </div>
                            <div className="">
                                <a href="#" data-toggle="modal" data-target="#myModal1">Forgot password?</a>
                            </div>
                        </div>
                        <div className="text-center mt-3">
                            <button type="submit" className="btn btn-primary px-4"><i className="fa fa-user mr-2"></i>Login</button>
                        </div>
                        <div className="d-flex justify-content-center mt-2">
                            <span>Do you haven't account?</span><Link to="/register" className="ml-1">Register</Link>
                        </div>
                    </form>
                </div>
            </section>
            {/* The Modal */}
            <div className="modal fade" id="myModal1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        {/* <!-- Modal Header --> */}
                        <div className="modal-header">
                            <h4 className="modal-title w-100 text-center">Reset Password</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        {/* <!-- Modal body --> */}
                        <div class="modal-body py-4">
                            <form>
                                <div className="form-group">
                                    <input type="text" placeholder="Enter email address" className="form-control" />
                                </div>
                            </form>
                            <div className="text-center mt-4">
                                <button type="submit" className="btn btn-primary px-3">Submit</button>
                            </div>
                        </div>
                        {/* <!-- Modal footer --> */}
                    </div>
                </div>
            </div>
        </>
    );
}
export default Login;