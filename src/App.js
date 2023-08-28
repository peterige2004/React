import Home from "./routes/home";
import { Routes, Route, Outlet } from "react-router-dom";
import Navigation from "./routes/navigation";
import SignIn from "./sign-in/sign-in";

const Shop = () => {
  return(
    <h1>I am shop page</h1>
  )
};

const App = () => {
  return (
       <Routes>
         <Route path='/' element={<Navigation/>}>  
        <Route index element={<Home/>}/>
        <Route path='Shop' element={<Shop/>}/>
        <Route path='sign-in' element={<SignIn/>}/>
        </Route>
      </Routes>
  );
};

export default App;
