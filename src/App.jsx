import Navbar       from './components/Navbar'
import Hero         from './components/Hero'
import Chronicle    from './components/Chronicle'
import Arsenal      from './components/Arsenal'
import Works        from './components/Works'
import Connect      from './components/Connect'
import Footer       from './components/Footer'
import CustomCursor from './components/CustomCursor'
import ScrollProgress from './components/ScrollProgress'

export default function App() {
  return (
    <>
      {/* Global helpers */}
      <CustomCursor />
      <ScrollProgress />

      {/* Navigation */}
      <Navbar />

      {/* Page sections */}
      <main>
        <Hero />
        <Chronicle />
        <Arsenal />
        <Works />
        <Connect />
      </main>

      <Footer />
    </>
  )
}
