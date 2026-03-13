import Navbar       from '../components/Navbar'
import Hero         from '../components/Hero'
import Chronicle    from '../components/Chronicle'
import Arsenal      from '../components/Arsenal'
import Works        from '../components/Works'
import Connect      from '../components/Connect'
import Footer       from '../components/Footer'
import CustomCursor from '../components/CustomCursor'
import ScrollProgress from '../components/ScrollProgress'
import ChatBot from '../components/ChatBot'

export default function Portfolio() {
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Chronicle />
        <Arsenal />
        <Works />
        <Connect />
      </main>
      <Footer />
      <ChatBot />
    </>
  )
}
