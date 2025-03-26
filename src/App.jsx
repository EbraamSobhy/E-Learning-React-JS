import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home/Home';
import NavBar from './components/Navbar/NavBar';
import Footer from './components/Footer/Footer';
import Tutorials from './content/Tutorials/Tutorials';
import HTML from './content/HTML/HTML';
import CSS from './content/CSS/CSS';
import JavaScript from './content/JavaScript/JavaScript';
import ReactJS from './content/ReactJS/ReactJS';
import NodeJS from './content/NodeJS/NodeJS';
import MongoDB from './content/MongoDB/MongoDB';
import ExpressJS from './content/ExpressJS/Express';
import SignUp from './registration/SignUp';
import Login from './login/Login';

function Layout() {
  const location = useLocation();

  const isExcludedPage = [
    "/tutorials",
    "/Online IDE",
    "/content/HTML",
    "/content/CSS",
    "/content/JavaScript",
    "/content/ReactJS",
    "/content/NodeJS",
    "/content/MongoDB",
    "/content/ExpressJS"
  ].includes(location.pathname);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tutorials" element={<Tutorials />} />
        <Route path="/content/HTML" element={<HTML />} />
        <Route path="/content/CSS" element={<CSS />} />
        <Route path="/content/JavaScript" element={<JavaScript />} />
        <Route path="/content/ReactJS" element={<ReactJS />} />
        <Route path="/content/NodeJS" element={<NodeJS />} />
        <Route path="/content/MongoDB" element={<MongoDB />} />
        <Route path="/content/ExpressJS" element={<ExpressJS />} />
        <Route path="/registration/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        </Routes>
      {!isExcludedPage && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Layout />
      </div>
    </Router>
  );
}

export default App;
