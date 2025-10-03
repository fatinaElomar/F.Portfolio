import Hero from '../components/sections/Hero'
import LogoMarquee from '../components/sections/LogoMarquee'
import Features from '../components/sections/Features'
import ShowcaseSticky from '../components/sections/ShowcaseSticky'
import Footer from '../components/sections/Footer'
import Testimonials from './testimonials'

export default function Home(){
  return (<>
    <Hero />
    <LogoMarquee />
    <Features />
    <ShowcaseSticky />
    <Testimonials />
   
  </>)
}
