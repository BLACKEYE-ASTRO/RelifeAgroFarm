import { BrowserRouter , Routes, Route} from "react-router-dom";

import { Hero, Navbar,About,Products,ConactUs ,Footer} from "./components";


const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path={"/"} element={<Hero />} />
        <Route path={"/about"} element={<About/>}/>
        <Route path={"/products"} element={<Products/>}/>
        <Route path={"/contact-us"} element={<ConactUs/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
