import './App.css';
import LoginForm from './components/LoginForm/LoginForm'
import AuthPage from './pages/AuthPage'

function App() {
    console.log(process.env)
  return (
    <div className="App">
        <AuthPage />
    </div>
  );
}

export default App;
