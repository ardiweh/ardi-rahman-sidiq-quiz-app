import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomeComponents from './QuizComponents/HomeComponents';
import LoginComponents from './QuizComponents/LoginComponents';
import RegisterComponents from './QuizComponents/RegisterComponents';
import QuizComponents from './QuizComponents/QuizComponents';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeComponents/>}/>
        <Route path="/login" element={<LoginComponents/>}/>
        <Route path="register/login" element={<LoginComponents/>}/>
        <Route path="/register" element={<RegisterComponents/>}/>
        <Route path="quiz" element={<QuizComponents/>}/>
        <Route path="/login/quiz" element={<QuizComponents/>}/>
        <Route path="/register/login/quiz" element={<QuizComponents/>}/>
      </Routes>
    </Router>
  );
}

export default App;
