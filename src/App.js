import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";





// import components from './components'
import Navbar from './Components/Navbar/Navbar'
import Templateone from './Components/Resumetemplates/Templateone'
import Home from './Components/Homescreen/Home'
import Userchooseme from './Components/Userchooseme/Userchooseme'
import Personal from './Components/Resumedetails/Personal'
import Education from './Components/Resumedetails/Education'
import Projects from './Components/Resumedetails/Projects'
import Skills from './Components/Resumedetails/Skills'
import Achivments from './Components/Resumedetails/Achivments'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Routes>
        <Route path="/userchooseme" element={<Userchooseme />} />
      </Routes>

      <Routes>
        <Route path="/enterresumedetails/1" element={<Personal />} />
      </Routes>

      <Routes>
        <Route path="/entereducationaldetails" element={<Education />} />
      </Routes>

      <Routes>
        <Route path="/enterprojectdetails" element={<Projects />} />
      </Routes>

      <Routes>
        <Route path="/enterskills" element={<Skills />} />
      </Routes>


      <Routes>
        <Route path="/enterachivments" element={<Achivments />} />
      </Routes>

      <Routes>
        <Route path="/showresults/:id" element={<Templateone />} />
      </Routes>








    </BrowserRouter>
  );
}

export default App;