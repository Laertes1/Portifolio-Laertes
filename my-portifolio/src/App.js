/*-----Routers-----*/
import Routers from "./components/Routers/Routers";
/*-----NavBar-----*/
import NavBar from "./components/NavBar/NavBar";
/*-----Footer-----*/
import Footer from "./components/Footer/Footer";
import EmailJs from "./components/Emailjs/EmailJs"
function App() {
  return (
    <>
        <NavBar />
       {/* <EmailJs/> */} 
                  <Routers/>
          <Footer />
     </>
  );
}

export default App;
