import Skills from "./main-sections/Skills";
import Gallery from "./main-sections/Gallery";
import Collaborate from "../components/Collaborate";
import Landing from "./main-sections/Landing";
import Footer from "./Footer";
import { useLazyLoad } from "../hooks/useLazyLoad";
import Loading from "./Loading";

function Main() {
  const { isLoading } = useLazyLoad({
    imagesUrl: [
      "/images/landing_lowres_bg.jpg",
      "/images/footer_lowres_bg.jpg",
      "/images/about_lowres_bg.jpg",
      "/images/project_lowres_bg.jpg",
    ],
  });

  if (isLoading) return <Loading />;

  return (
    <>
      <Landing />
      <Skills />
      <Collaborate />
      <Gallery />
      <Footer hasBackground={true} />
    </>
  );
}

export default Main;
