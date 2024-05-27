import logo from './logo.svg';
import './App.css';
import Users from "./components/Users";
import Login from './components/Login';
import Student from './components/Student';

function App() {
  return (
    <div className='mainSection'>
     <Users/>
     <Login/>
     <Student name="ram" age={25}/>
     {/* here student is a component */}
     <Student name="santhosh" age={26}/>
    </div>

  );
}

export default App;
