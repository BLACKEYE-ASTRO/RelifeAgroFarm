import { BrowserRouter , Routes, Route} from "react-router-dom";

import { Hero, Navbar } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Hero />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
