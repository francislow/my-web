import Skills from './main-sections/Skills'
import Gallery from './main-sections/Gallery'
import Collaborate from '../components/Collaborate'
import Landing from './main-sections/Landing'
import Footer from './Footer'

function Main() {
  return (
    <>
      <Landing />
      <Skills />
      <Collaborate />
      <Gallery />
      <Footer hasBackground={true} />
    </>
  )
}

/*
  Convert files to tsx

  Update projects at github
  Update portfolio websites at github
*/

export default Main
