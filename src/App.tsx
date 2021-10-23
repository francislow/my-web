import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Actionbar from "./screens/Actionbar";
import Main from "./screens/Main";
import Project from "./screens/Project";
import About from "./screens/About";
import Credit from "./screens/Credit";
import Loading from "./screens/Loading";

function App() {
  let [isloading, setIsLoading] = useState(true)

  useEffect(() => {
    const images = ['/images/landing_bg.jpg']
    cacheImages(images);
  }, [])

  async function cacheImages(images: Array<string>) {
    setIsLoading(true)
    const promises = await images.map(url => {
      return new Promise((resolve, reject) => {
        const image = new Image()
        image.src = url
        image.onload = () => resolve(null)
        image.onerror = () => reject(null)
      })
    })

    await Promise.all(promises)
    setIsLoading(false)
  }

  return (
    <>
    {isloading ? 
      <Loading /> :
      <Router>
        <Actionbar />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>

          <Route exact path="/projects/:projectId">
            <Project />
          </Route>

          <Route exact path="/about">
            <About />
          </Route>

          <Route exact path="/credits">
            <Credit />
          </Route>

          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    }
    </>
  );
}

export default App;
