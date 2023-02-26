import { useNavigate } from "react-router-dom"
const RegisterComponents = () => {
    const navigate = useNavigate()
    return (
        <>
            <h3>Register</h3>
            <form>
                <div className="form-group">
                    <label>Username</label>
                    <br />
                    <input type="text" className="form-control" placeholder="Username" />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <br />
                    <input type="email" className="form-control" placeholder="Email" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <br />
                    <input type="password" className="form-control" placeholder="Password" />
                </div>
                <div className="form-group">
                    <label>Confirm Password</label>
                    <br />
                    <input type="password" className="form-control" placeholder="Confirm Password" />
                </div>
                <br />
                <button className="button" on onClick={() => navigate('login')}>Register</button>
            </form>
        </>
    )
}

export default RegisterComponents
