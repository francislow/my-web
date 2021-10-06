import Skills from './main-sections/Skills'
import Gallery from './main-sections/Gallery'
import Collaborate from '../components/Collaborate'
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
  Image sizes (about, welcome, project background is huges)
  Convert files to tsx
*/

export default Main
