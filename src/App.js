import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

import Home from '../src/components/pages/Home'
import Company from '../src/components/pages/Company'
import Contact from '../src/components/pages/Contact'
import NewProject from '../src/components/pages/NewProject'
import Projects from '../src/components/pages/Projects'
import Project from './components/pages/Project'

import Container from '../src/components/layout/Container'
import Navbar from '../src/components/layout/Navbar'
import Footer from '../src/components/layout/Footer'


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Container customClass="min-height">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/company" element={<Company />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/newProject" element={<NewProject />}></Route>
            <Route path="/project/:id" element={<Project />}></Route>
          </Routes>
        </Container>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
