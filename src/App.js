import CheckOut from "./components/check-out/check-out.component";
import Home from "./routes/Home/home.component";
import Navigation from "./routes/Navigation/navigation.component";
import Shop from "./routes/Shop/shop.component";
import Authentication from "./routes/authentication/authentication.component";
import { Routes, Route } from "react-router-dom";

const App = () => {

  return (
    <Routes >
      <Route path= "/" element= {<Navigation/>} >
        <Route index element= {<Home/>}/>
        <Route path="/Shop" element= {<Shop/>}/>
        <Route path="/Auth" element={<Authentication/>}/>
        <Route path="/checkout" element={<CheckOut/>}/>
      </Route>  
    </Routes>
  )
}

export default App;
