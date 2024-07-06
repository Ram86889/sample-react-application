import logo from './logo.svg';
// import './App.css';
// import Users from "./components/Users";
// import Login from './components/Login';
// import Student from './components/Student';
// import Counter from './components/Counter';
import TodoList from './components/Todolist';

function App() {

  // const isUser=true;
  return (
    // <div className='mainSection'>
    //  {isUser ? <Users/>: ""}
     <div>
     {/* <Login/>
     <Counter/> */}
     <TodoList/>
     
     </div>
    
    //  {/* here student is a component */}
    //  <Student name="santhosh" age={26}/>
    // </div>

  );
}

export default App;
