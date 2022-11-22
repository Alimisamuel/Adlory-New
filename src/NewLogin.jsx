import axios from "axios";
import React, { useState } from "react";

function LoginArea () {
	const [emal, setEmail] = useState("");
	const [password, setPassword] = useState("");

	async function Login() {
		let res = await axios.post("https://adlory.herokuapp.com/api/login", { email: emal, password: password });
		console.log(res);
	}
	return (
        <>
        <section id="login_area" className="ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3 col-md-12 col-sm-12 col-12">
                        <div className="account_form">
                            <h3>Login</h3>
                            <form>
                                <div className="default-form-box">
                                    <label>Username or email<span className="text-danger">*</span></label>
                                    <input type="text"  onChange={(e) => setEmail(e.target.value)} className="form-control" required defaultValue="jhondoe@gmail.com"/>
                                </div>
                                <div className="default-form-box">
                                    <label>Passwords<span className="text-danger">*</span></label>
                                    <input type="password" onChange={(e) => setPassword(e.target.value)}  className="form-control" required defaultValue="jhondoe123" minLength="8"/>
                                </div>
                                <div className="login_submit">
                                    <button className="theme-btn-one btn-black-overlay btn_md" type="submit" onClick={Login}>login</button>
                                </div>
                                <div className="remember_area">
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="materialUnchecked"/>
                                        <label className="form-check-label" htmlFor="materialUnchecked">Remember me</label>
                                    </div>
                                </div>
                                {/* <Link to="/register" className="active">Create Your Account?</Link> */}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
	</>
	);
}

export default LoginArea;