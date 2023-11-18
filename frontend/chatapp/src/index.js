import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Layout from './layout.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements,Link } from 'react-router-dom'
import Landingpage from './components/landingpage.js';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Landingpage />} />
      <Route path='home' element={<Home />} />
      <Route path='randomchat' element={<Chat />} />
      <Route path='groupchat'  element ={<Groupchat />} />
    </Route>
  )
)

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
function Chat(){
  return(
    <div>Random Chat Page</div>
  )
}

function Groupchat(){
  return(
    <div>Group chat page</div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
