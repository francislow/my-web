import Skills from './main-sections/Skills'
import Gallery from './main-sections/Gallery'
import Collaborate from './main-sections/Collaborate'
import Welcome from './main-sections/Welcome'
import Footer from './Footer'

function Main() {
  return (
    <>
      <Welcome />
      <Skills />
      <Collaborate />
      <Gallery />
      <Footer hasBackground={true} />
    </>
  )
}

/*
  Resume
  Coding life journey (ie about page)
  Project Page
  Credits
*/

export default Main
