import { Route, Routes } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import About from "./components/About/About";

function App() {
  return (
    <>
      <Menu />
      <main>
        <Routes>
          <Route path="/aboutMe" element={<About/>} />
        </Routes>
      </main>
      
    </>
  );
}

export default App;
