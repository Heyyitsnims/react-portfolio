import Navbar from "./components/navbar";
import "./App.css";
import Aboutme from "./components/aboutme";
import Projects from "./components/project";

const App = ()=>{
  return(
    <div id="hero">
      <Navbar /> 
      <Aboutme />
      <Projects />
      <p>congrats for deploying your site;</p>
    
    </div>
  );
 
};

export default App;
