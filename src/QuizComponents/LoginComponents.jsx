import { useNavigate } from "react-router-dom"
const LoginComponents = () => {
    const navigate = useNavigate()
    return (
        <div>
            <h3>Login</h3>
            <form>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <br />
                    <input type="text" className="form-control" id="username" placeholder="Username" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password  </label>
                    <br />
                    <input type="password" className="form-control" id="password" placeholder="Password" />
                </div>
                <br />
                <button className="button" on onClick={() => navigate('quiz')}>Login</button>
            </form>
        </div>
    )
}

export default LoginComponents
