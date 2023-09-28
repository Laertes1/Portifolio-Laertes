/*-----Home-----*/
import Home from "./pages/home/index";
/*-----Routers-----*/
import Routers from "./components/Routers/Routers";
/*-----NavBar-----*/
import NavBar from "./components/NavBar/NavBar";
/*-----Footer-----*/
import Footer from "./components/Footer/Footer";
import AboutMe from "./pages/AboutMe/AboutMe";

function App() {
  return (
    <>
      <NavBar/>
      <Routers/>
      <Footer/>
    </>
  );
}

export default App;
