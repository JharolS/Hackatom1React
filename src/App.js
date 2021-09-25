import './App.css';
import Loggin from './components/loggin';
import Options from './components/options';

const App = () => {
  return (
    <div className="container">
      <h1>Hello,</h1>
      <h1>Welcome Back</h1>
      <Loggin />
      <Options />
    </div>
  );
}

export default App;
