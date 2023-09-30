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
      </Route>  
    </Routes>
  )
}

export default App;
