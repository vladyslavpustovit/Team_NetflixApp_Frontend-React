import "./login.css"
function Login() {
    return (
        <div className="login-body">
            <div className="logo">
                <img src="/assets/images/logo.png" alt="" />
            </div>

            <div className="container">
                <h1>Sign In</h1>
                <div className="form">
                    <input type="username" placeholder="username" />
                    <input type="password" placeholder="password" />
                    <input type="submit" value="Sign In" />
                    <input type="checkbox" />
                    <label>Remember me</label>
                    <a href="#">Need help?</a>
                </div>
                <div className="content">
                    <h2>New to Netflix? <a href="/register">Sign up now</a></h2>
                    <br />
                    <h2>
                        This page is protrected by Google reCAPTCHA to ensure your're not a
                        bot. Learn more.
                    </h2>
                </div>
            </div>
        </div>
    );
}

export default Login;
