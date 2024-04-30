// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import AnimatedGradientBackground from './components/Background';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Services from './components/Services';
import UpcomingProducts from './components/Upcoming';
import Stats from './components/Stats';

import CompanyLogosMarquee from './components/CompaniesScroll';
import Footer from './components/Footer';
import About from './Pages/About'; // Correct import path for About component

function App() {
  return (
    <Router>
      <>
        <AnimatedGradientBackground />
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Hero id='home' />
            <CompanyLogosMarquee />
            <Products id="products" />
            <UpcomingProducts id='projects' />
            <Services />
            <Stats />
          
            <Footer />
          </Route>
          <Route path="/about"> {/* Define route for About page */}
            <About />
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
