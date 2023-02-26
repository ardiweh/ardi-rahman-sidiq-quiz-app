import { useNavigate } from "react-router-dom"
const HomeComponents = () => {
    const navigate = useNavigate()
    return (
        <>
            <h3>Welcome to Quiz AI</h3>
            <button className="button" on onClick={() => navigate('login')}>Login</button>
            <br />
            <button className="button" on onClick={() => navigate('register')}>Register</button>
        </>
    )
}

export default HomeComponents
