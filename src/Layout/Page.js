import { Landing, About, Projects,Resume } from '../components/index'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Page = () => {

//  function ScrollToTopOnMount() {
//    const location = useLocation();

//    useEffect(() => {
//      const { hash } = location;
//      if (hash) {
//        const element = document.getElementById(hash.substring(1));
//        if (element) {
//          element.scrollIntoView({ behavior: "smooth" });
//        }
//      }
//    }, [location]);

//    return null;
//  }

  return (
    <main>
      {/* <ScrollToTopOnMount/> */}
      <Landing />
      <About />
      <Resume />
      <Projects />
    </main>
  );
};

export default Page;