import ScrollProgress from './components/layout/ScrollProgress'
import Navbar from './components/layout/Navbar'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'
import Resume from './components/resume/Resume'
import Blog from './components/blog/Blog'
import Certifications from './components/certifications/Certifications'
import Contact from './components/contact/Contact'
import Footer from './components/layout/Footer'

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Resume />
        <Blog />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
