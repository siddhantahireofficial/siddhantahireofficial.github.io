import React from 'react'
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Nav';
import { Route, Switch } from 'react-router-dom';
import Blog from './pages/Blog';
import Home from './pages/Home';
import Work from './pages/Work';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <div className="container">
        <Navbar />
      </div>

      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/Blogs"><Blog /></Route>
        <Route exact path="/work"><Work /></Route>
        <Route exact path="/contact"><Contact /></Route>
      </Switch>
      <Footer/>
    </>

  );
}

export default App;
