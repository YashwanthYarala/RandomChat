import logo from './logo.svg';
import './App.css';
import * as ReactDOM from "react-dom/client";


function App() {
  return (
    <div className="App">
      <div className='navbar'>
        <Link to="/">Home</Link>
        <Link to='/About'>About</Link>
      </div>
      <div>
        
      </div>
      
    </div>
  );
}
function Home(){
  return(
    <div>Home Page</div>
  )
}
function About(){
  return(
    <div>About Page</div>
  )
}
function chat(){
  return(
    <div>Chat Page</div>
  )
}
export default App;
