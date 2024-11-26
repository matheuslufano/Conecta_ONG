import Home from "./pages/home/Home";
import Topbar from "./components/topbar/Topbar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/aboutUs/AboutUs";
import Contact from "./pages/contact/Contact";

function App() {
  const user = false;

  return (
    <Router>
      <Topbar />
      <Routes>

        <Route 
          path="/" 
          element={<Home />} 
        />
        
        <Route
          path="/register"
          element={user ? <Home /> : <Register />}
        />
        
        <Route 
          path="/login" 
          element={user ? <Home /> : <Login />} 
        />
        
        <Route 
          path="/write" 
          element={user ? <Write /> : <Register />} 
        />
        
        <Route 
          path="/post/" 
          element={<Single />} 
        />

        <Route 
          path="/aboutus/" 
          element={<AboutUs />} 
        />
        
        <Route 
          path="/contact" 
          element={<Contact />} 
        />
        
        <Route 
          path="/settings" 
          element={user ? <Settings /> : <Register />} 
        />
        
        <Route path="/post/:postId"/>
      </Routes>
    </Router>
  );
}

export default App;
