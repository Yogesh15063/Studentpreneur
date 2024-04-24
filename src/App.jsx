
import AnimatedGradientBackground from './components/Background'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import Services from './components/Services'
import Upcoming from './components/Upcoming'
import Stats from './components/Stats'
import InstagramReel from './components/InstagramReel'
import CompanyLogosMarquee from './components/CompaniesScroll'
import Footer from './components/Footer'
function App() {


  return (
    <>
     <AnimatedGradientBackground/> 
    <Navbar></Navbar>
    <Hero></Hero>
    <CompanyLogosMarquee/> 
    <Products id="products"></Products>
   
    <Upcoming></Upcoming>
    <Services></Services>
    <Stats></Stats>
    <InstagramReel></InstagramReel>
     
     <Footer></Footer>
    </>
  )
}

export default App
